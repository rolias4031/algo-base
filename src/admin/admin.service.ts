import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from './admin.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { CreateAdminDto } from 'src/dto/Admin.dto';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private adminRepository: Repository<Admin>,
  ) {}

  async findOne(email: string): Promise<Admin | undefined> {
    const admin = await this.adminRepository.findOneBy({ email: email });
    return admin;
  }

  async authorizeAdmin(email: string, password: string): Promise<boolean> {
    console.log(email, password);
    const admin = await this.adminRepository.findOneBy({ email: email });
    if (!admin) {
      throw new HttpException('Admin not found', HttpStatus.NOT_FOUND);
    }
    const isMatch = bcrypt.compare(password, admin.password);
    if (!isMatch) return false;
    return true;
  }

  async createAdmin(createAdminDto: CreateAdminDto): Promise<string> {
    const adminExists = await this.adminRepository.findOneBy({
      email: createAdminDto.email,
    });
    if (adminExists) {
      throw new HttpException(
        'email already in use',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
    if (createAdminDto.password !== createAdminDto.confirm) {
      throw new HttpException(
        "Passwords don't match",
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
    const hashedPw = await bcrypt.hash(createAdminDto.password, 10);
    const { confirm, ...newAdmin } = createAdminDto;
    newAdmin.password = hashedPw;
    const record = this.adminRepository.create(newAdmin);
    await this.adminRepository.save(record);
    return 'Admin created';
  }
}

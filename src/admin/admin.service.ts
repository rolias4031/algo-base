import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from './admin.entity';
import { Repository } from 'typeorm';

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
}

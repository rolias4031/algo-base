import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto, DeleteUserDto } from 'src/dto/User.dto';
import { randomUUID } from 'crypto';
import * as bcrypt from 'bcrypt';

@Injectable({})
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findOne(email: string): Promise<User | undefined> {
    const user = await this.userRepository.findOneBy({ email: email });
    return user;
  }

  async allUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async createUser(createUserDto: CreateUserDto): Promise<string> {
    const exists = await this.userRepository.findOneBy({
      email: createUserDto.email,
    });
    if (exists) {
      throw new HttpException(
        'Email already in use',
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    if (createUserDto.password !== createUserDto.confirm_password) {
      throw new HttpException(
        "Password don't match",
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    // hash password and replace with plain text pw
    const hashedPW = await bcrypt.hash(createUserDto.password, 10);
    createUserDto.password = hashedPW;
    // create api_key and add to Dto
    createUserDto.api_key = randomUUID();
    // remove the confirmPassword property
    const { confirm_password, ...finalUserDto } = createUserDto;
    const newUser = this.userRepository.create(finalUserDto);
    const { api_key } = await this.userRepository.save(newUser);
    return api_key;
  }

  async deleteUser(deleteUserDto: DeleteUserDto): Promise<string> {
    const user = await this.userRepository.findOneBy({
      email: deleteUserDto.email,
    });
    if (!user) {
      throw new HttpException("That user doesn't exist", HttpStatus.NOT_FOUND);
    }
    const isMatch = await bcrypt.compare(deleteUserDto.password, user.password);
    if (!isMatch) {
      throw new HttpException('Incorrect password', HttpStatus.UNAUTHORIZED);
    }
    await this.userRepository.delete({ email: deleteUserDto.email });
    return 'delete successful';
  }
}

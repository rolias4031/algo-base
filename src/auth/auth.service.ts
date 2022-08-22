import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { HttpException, HttpStatus } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async authorizeUser(email: string, api_key: string): Promise<boolean> {
    console.log(email, api_key);
    // find user and check if exists
    const user = await this.userRepository.findOneBy({ email: email });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    console.log(user);
    // user exists, check api_key against user.api_key
    const isMatch = await bcrypt.compare(api_key, user.api_key);
    if (!isMatch) return false;
    return true;
  }
}

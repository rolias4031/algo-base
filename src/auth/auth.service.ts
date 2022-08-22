import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable({})
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(email: string, api_key: string): Promise<any> {
    console.log(email, api_key);
    const user = await this.usersService.findOne(email);
    // include bcrypt compare and hash for this not plain text
    if (user && user.api_key === api_key) {
      return user;
    }
    return null;
  }
}

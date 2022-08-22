import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { UsersService } from './users/users.service';
import { User } from './users/user.entity';
import { randomUUID } from 'crypto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UsersService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/authenticate')
  async authenticate(@Request() req): Promise<any> {
    console.log(req);
    console.log(randomUUID());
    return req.user;
  }

  @Get('auth/all')
  async getAll(): Promise<User[]> {
    return this.userService.allUsers();
  }
}

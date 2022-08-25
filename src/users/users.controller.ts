import { Controller, Post, Body, Delete, Get, UseGuards } from '@nestjs/common';
import { CreateUserDto, DeleteUserDto } from 'src/dto/User.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { AdminGuard } from 'src/admin/admin.guard';

// controller that handles all User related requests. Injects UsersService, which contains majority of functionality.
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  // fetches all Users. Admin access only
  @UseGuards(AdminGuard)
  @Get('all')
  async getAll(): Promise<User[]> {
    return this.usersService.allUsers();
  }

  // creates a new User and returns an api_key for access
  @Post('create')
  async newUser(
    @Body() createUserDto: CreateUserDto,
  ): Promise<{ message: string; api_key: string }> {
    const api_key = await this.usersService.createUser(createUserDto);
    const msg = {
      message:
        'SAVE YOUR API KEY IN A SECURE PLACE. YOU WILL NOT BE ABLE TO RETRIEVE IT AGAIN.',
      api_key: api_key,
    };
    return msg;
  }

  // deletes the specified user, requires email & password
  @Delete('delete')
  async deleteUser(@Body() deleteUserDto: DeleteUserDto): Promise<string> {
    return await this.usersService.deleteUser(deleteUserDto);
  }
}

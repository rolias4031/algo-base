import { Controller, Post, Body, Delete } from '@nestjs/common';
import { CreateUserDto, DeleteUserDto } from 'src/dto/User.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  //need create and delete routes.
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

  @Delete('delete')
  async deleteUser(@Body() deleteUserDto: DeleteUserDto): Promise<string> {
    return await this.usersService.deleteUser(deleteUserDto);
  }
}

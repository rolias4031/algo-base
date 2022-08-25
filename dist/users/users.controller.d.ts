import { CreateUserDto, DeleteUserDto } from 'src/dto/User.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getAll(): Promise<User[]>;
    newUser(createUserDto: CreateUserDto): Promise<{
        message: string;
        api_key: string;
    }>;
    deleteUser(deleteUserDto: DeleteUserDto): Promise<string>;
}

import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto, DeleteUserDto } from 'src/dto/User.dto';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    findOne(email: string): Promise<User | undefined>;
    allUsers(): Promise<User[]>;
    createUser(createUserDto: CreateUserDto): Promise<string>;
    deleteUser(deleteUserDto: DeleteUserDto): Promise<string>;
}

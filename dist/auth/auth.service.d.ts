import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
export declare class AuthService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    authorizeUser(email: string, api_key: string): Promise<boolean>;
}

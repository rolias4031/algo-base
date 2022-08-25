import { Admin } from './admin.entity';
import { Repository } from 'typeorm';
import { CreateAdminDto } from 'src/dto/Admin.dto';
export declare class AdminService {
    private adminRepository;
    constructor(adminRepository: Repository<Admin>);
    findOne(email: string): Promise<Admin | undefined>;
    authorizeAdmin(email: string, password: string): Promise<boolean>;
    createAdmin(createAdminDto: CreateAdminDto): Promise<string>;
}

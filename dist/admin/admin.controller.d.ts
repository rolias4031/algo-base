import { AdminService } from './admin.service';
import { CreateAdminDto } from 'src/dto/Admin.dto';
export declare class AdminController {
    private adminService;
    constructor(adminService: AdminService);
    createAdmin(createAdminDto: CreateAdminDto): Promise<string>;
}

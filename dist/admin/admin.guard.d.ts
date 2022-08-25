import { CanActivate, ExecutionContext } from '@nestjs/common';
import { AdminService } from './admin.service';
export declare class AdminGuard implements CanActivate {
    private adminService;
    constructor(adminService: AdminService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}

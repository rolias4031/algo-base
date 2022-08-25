import { CanActivate, ExecutionContext } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
export declare class ApiGuard implements CanActivate {
    private usersService;
    constructor(usersService: UsersService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}

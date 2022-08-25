import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { AdminService } from './admin.service';

// essentially the same as AuthGuard, but checks admin table for correct email and password
@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private adminService: AdminService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    if (!req.headers.email || !req.headers.password) {
      throw new HttpException(
        'Admin credentials required',
        HttpStatus.UNAUTHORIZED,
      );
    }
    return await this.adminService.authorizeAdmin(
      req.headers.email,
      req.headers.password,
    );
  }
}

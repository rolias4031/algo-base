import {
  Injectable,
  CanActivate,
  ExecutionContext,
  Inject,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { AuthService } from './auth.service';

// import UsersService and find api_key in DB

@Injectable()
export class ApiGuard implements CanActivate {
  constructor(private authService: AuthService) {}
  // returns true if authorized, false if not.
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    if (!req.headers.api_key || !req.headers.email) {
      throw new HttpException(
        'Please include auth credentials',
        HttpStatus.UNAUTHORIZED,
      );
    }
    return await this.authService.authorizeUser(
      req.headers.email,
      req.headers.api_key,
    );
  }
}

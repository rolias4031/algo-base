import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable({})
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email', passwordField: 'api_key' }); //options for the strategy go here
  }

  async validate(email: string, api_key: string): Promise<any> {
    const user = await this.authService.validateUser(email, api_key);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}

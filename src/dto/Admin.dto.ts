import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateAdminDto {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  confirm: string;
}

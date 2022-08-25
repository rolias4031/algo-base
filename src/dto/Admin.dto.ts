import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

// dto used for creating an admin in POST admin/create

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

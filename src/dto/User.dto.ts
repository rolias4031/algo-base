import {
  Equals,
  IsEmail,
  IsEmpty,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';
import { OmitType } from '@nestjs/mapped-types';

// confirmation phrase for deletion
const DELETE_USER_PHRASE = 'YES, DELETE ME FOREVER!';

// dto for creating a user in POST user/create
export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  password: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  confirm_password: string;

  @IsEmpty()
  api_key: string;
}

export class DeleteUserDto extends OmitType(CreateUserDto, [
  'api_key',
  'confirm_password',
] as const) {
  @IsNotEmpty()
  @Equals(DELETE_USER_PHRASE)
  confirmationPhrase: string;
}

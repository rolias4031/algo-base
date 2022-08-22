import {
  Equals,
  IsEmail,
  IsEmpty,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';

const DELETE_USER_PHRASE = 'YES, DELETE ME FOREVER!';

import { OmitType } from '@nestjs/mapped-types';

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

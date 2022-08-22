import { IsNotEmpty, IsString, Equals } from 'class-validator';

export class AdminHeaderDto {
  @IsNotEmpty()
  @IsString()
  @Equals(process.env.ADMIN_PW)
  api_key: string;
}

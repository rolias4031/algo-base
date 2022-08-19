import { IsNotEmpty, IsString } from 'class-validator';

export class DsParamsDto {
  @IsNotEmpty()
  @IsString()
  dsName: string;
}

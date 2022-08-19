import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDsDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  displayName: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  best_for: string;

  @IsNotEmpty()
  @IsString()
  examples: string;

  @IsNotEmpty()
  @IsString()
  insert_tc: string;

  @IsNotEmpty()
  @IsString()
  remove_tc: string;

  @IsNotEmpty()
  @IsString()
  access_tc: string;

  @IsNotEmpty()
  @IsString()
  search_tc: string;
}

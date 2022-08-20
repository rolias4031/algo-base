import { IsNotEmpty, IsString } from 'class-validator';
import { PartialType, OmitType } from '@nestjs/mapped-types';

export class CreateDsDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  display_name: string;

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

export class EditDsDto extends PartialType(
  OmitType(CreateDsDto, ['name'] as const),
) {
  @IsNotEmpty()
  @IsString()
  name: string;
}

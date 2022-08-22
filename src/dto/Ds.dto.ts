import { IsNotEmpty, IsString } from 'class-validator';
import { PartialType, OmitType } from '@nestjs/mapped-types';

// Dto for POST ds/create

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

// Dto for PUT ds/edit.
// Uses PartialType() to recreate CreateDsDto, but with all fields optional.
// Uses OmitType() to remove the name field and then create it again, because we cannot have it tagged as optional. Might be able to do this another way FYI.

export class EditDsDto extends PartialType(
  OmitType(CreateDsDto, ['name'] as const),
) {
  @IsNotEmpty()
  @IsString()
  name: string;
}

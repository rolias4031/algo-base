import { IsNotEmpty, IsString } from 'class-validator';
import { PartialType, OmitType } from '@nestjs/mapped-types';

// Dto for route POST algo/create

export class CreateAlgoDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  display_name: string;

  @IsNotEmpty()
  @IsString()
  algo_type: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  tc_best: string;

  @IsNotEmpty()
  @IsString()
  sc_best: string;

  @IsNotEmpty()
  @IsString()
  tc_avg: string;

  @IsNotEmpty()
  @IsString()
  sc_avg: string;
}

// Dto for PUT algo/edit and derived from CreateAlgoDto. Uses PartialType() to set all fields optional. Then OmitType() to remove name, and then add it back because we can't have that marked as an optional field.

export class EditAlgoDto extends PartialType(
  OmitType(CreateAlgoDto, ['name'] as const),
) {
  @IsNotEmpty()
  @IsString()
  name: string;
}

import { IsNotEmpty, IsString } from 'class-validator';
import { PartialType, OmitType } from '@nestjs/mapped-types';

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

export class EditAlgoDto extends PartialType(
  OmitType(CreateAlgoDto, ['name'] as const),
) {
  @IsNotEmpty()
  @IsString()
  name: string;
}

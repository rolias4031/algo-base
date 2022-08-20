import { IsNotEmpty, IsString } from 'class-validator';
import { PartialType, OmitType } from '@nestjs/mapped-types';

export class CreateAlgoDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  displayName: string;

  @IsNotEmpty()
  @IsString()
  algoType: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  timeCompBest: string;

  @IsNotEmpty()
  @IsString()
  spaceCompBest: string;

  @IsNotEmpty()
  @IsString()
  timeCompAvg: string;

  @IsNotEmpty()
  @IsString()
  spaceCompAvg: string;
}

export class EditAlgoDto extends PartialType(
  OmitType(CreateAlgoDto, ['name'] as const),
) {
  @IsNotEmpty()
  @IsString()
  name: string;
}

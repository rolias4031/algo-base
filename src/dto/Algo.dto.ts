import {
  IsNotEmpty,
  IsString,
  IsIn,
  IsArray,
  IsInt,
  IsOptional,
  IsBoolean,
} from 'class-validator';
import { PartialType, OmitType } from '@nestjs/mapped-types';

const allowedTypes_GetAllAlgosDto: string[] = ['all', 'search', 'sort'];

// for @Params() GET algo/:algoType route
export class GetAllAlgosDto {
  @IsNotEmpty()
  @IsString()
  @IsIn(allowedTypes_GetAllAlgosDto)
  algoType: string;
}

// for @Params() GET algo/:algoName route
export class GetOneAlgoDto {
  @IsNotEmpty()
  @IsString()
  algoName: string;
}

// for @Body() POST algo/apply/search
const allowedName_SearchAlgoDto: string[] = ['binary-search', 'linear-search'];
export class SearchAlgoDto {
  @IsNotEmpty()
  @IsString()
  @IsIn(allowedName_SearchAlgoDto)
  algoName: string;

  @IsNotEmpty()
  @IsArray()
  @IsInt({
    each: true,
  })
  data: number[];

  @IsNotEmpty()
  @IsInt()
  target: number;
}

// for @Body() POST algo/apply/sort
// add all sort algorithm names here - this is the whitelist.
const allowedNames_SortAlgoDto: string[] = [
  'bubble-sort',
  'insertion-sort',
  'merge-sort',
  'radix-sort',
  'quick-sort',
];
export class SortAlgoDto {
  @IsNotEmpty()
  @IsString()
  @IsIn(allowedNames_SortAlgoDto)
  algoName: string;

  @IsNotEmpty()
  @IsArray()
  @IsInt({
    each: true,
  })
  data: number[];

  @IsOptional()
  @IsNotEmpty()
  @IsBoolean()
  ascending: boolean;
}

// for @Body() route POST algo/create
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

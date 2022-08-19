import {
  IsNotEmpty,
  IsBoolean,
  IsArray,
  IsInt,
  IsOptional,
  IsIn,
  IsString,
} from 'class-validator';

// add all sort algorithm names here - this is the whitelist.
const allowedNames: string[] = [
  'bubble-sort',
  'insertion-sort',
  'merge-sort',
  'radix-sort',
  'quick-sort',
];

export class SortBodyDto {
  @IsNotEmpty()
  @IsString()
  @IsIn(allowedNames)
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

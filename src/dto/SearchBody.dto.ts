import { IsNotEmpty, IsString, IsInt, IsArray, IsIn } from 'class-validator';

const allowedNames: string[] = ['binary-search', 'linear-search'];

export class SearchBodyDto {
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

  @IsNotEmpty()
  @IsInt()
  target: number;
}

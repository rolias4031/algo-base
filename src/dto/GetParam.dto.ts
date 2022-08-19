import { IsNotEmpty, IsString, IsIn, IsAlpha } from 'class-validator';

const allowedTypes: string[] = ['all', 'search', 'sort'];

export class GetAllAlgosDto {
  @IsNotEmpty()
  @IsString()
  @IsIn(allowedTypes)
  algoType: string;
}

export class GetOneAlgoDto {
  @IsNotEmpty()
  @IsString()
  algoName: string;
}

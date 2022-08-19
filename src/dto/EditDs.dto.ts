import { PartialType, OmitType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString } from 'class-validator';
import { CreateDsDto } from './CreateDs.dto';

export class EditDsDto extends PartialType(
  OmitType(CreateDsDto, ['name'] as const),
) {
  @IsNotEmpty()
  @IsString()
  name: string;
}

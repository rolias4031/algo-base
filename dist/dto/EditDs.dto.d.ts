import { CreateDsDto } from './CreateDs.dto';
declare const EditDsDto_base: import("@nestjs/mapped-types").MappedType<Partial<Omit<CreateDsDto, "name">>>;
export declare class EditDsDto extends EditDsDto_base {
    name: string;
}
export {};

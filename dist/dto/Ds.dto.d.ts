export declare class DsParamsDto {
    dsName: string;
}
export declare class CreateDsDto {
    name: string;
    display_name: string;
    description: string;
    best_for: string;
    examples: string;
    insert_tc: string;
    remove_tc: string;
    access_tc: string;
    search_tc: string;
}
declare const EditDsDto_base: import("@nestjs/mapped-types").MappedType<Partial<Omit<CreateDsDto, "name">>>;
export declare class EditDsDto extends EditDsDto_base {
    name: string;
}
export {};

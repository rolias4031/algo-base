export declare class GetAllAlgosDto {
    algoType: string;
}
export declare class GetOneAlgoDto {
    algoName: string;
}
export declare class SearchAlgoDto {
    algoName: string;
    data: number[];
    target: number;
}
export declare class SortAlgoDto {
    algoName: string;
    data: number[];
    ascending: boolean;
}
export declare class CreateAlgoDto {
    name: string;
    display_name: string;
    algo_type: string;
    description: string;
    tc_best: string;
    sc_best: string;
    tc_avg: string;
    sc_avg: string;
}
declare const EditAlgoDto_base: import("@nestjs/mapped-types").MappedType<Partial<Omit<CreateAlgoDto, "name">>>;
export declare class EditAlgoDto extends EditAlgoDto_base {
    name: string;
}
export {};

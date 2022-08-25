import { CreateAlgoDto, EditAlgoDto } from 'src/dto/Algo.dto';
import { Repository } from 'typeorm';
import { Algo } from './algo.entity';
export declare class AlgoService {
    private algoRepository;
    constructor(algoRepository: Repository<Algo>);
    searchMap: Map<string, (arr: number[], target: number) => number>;
    sortMap: Map<string, (arr: number[]) => number[]>;
    findAll(name: string): Promise<Algo[]>;
    findOne(name: string): Promise<Algo>;
    applySort(algoName: string, data: number[]): number[];
    applySearch(algoName: string, data: number[], target: number): number;
    createAlgo(createAlgoDto: CreateAlgoDto): Promise<Algo>;
    editAlgo(editAlgoDto: EditAlgoDto): Promise<Algo>;
}

import { SearchAlgoDto, SortAlgoDto, GetAllAlgosDto, GetOneAlgoDto, CreateAlgoDto, EditAlgoDto } from 'src/dto/Algo.dto';
import { AlgoService } from './algo.service';
import { Algo } from './algo.entity';
export declare class AlgoController {
    private algoService;
    constructor(algoService: AlgoService);
    getAllAlgos(params: GetAllAlgosDto): Promise<Algo[]>;
    getAlgo(params: GetOneAlgoDto): Promise<Algo>;
    applySearch(body: SearchAlgoDto): string;
    applySort(body: SortAlgoDto): number[];
    createAlgo(createAlgoDto: CreateAlgoDto): Promise<Algo>;
    editAlgo(editAlgoDto: EditAlgoDto): Promise<Algo>;
}

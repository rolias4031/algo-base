import { DsService } from './ds.service';
import { Ds } from './ds.entity';
import { DsParamsDto } from 'src/dto/Ds.dto';
import { CreateDsDto, EditDsDto } from 'src/dto/Ds.dto';
export declare class DsController {
    private dsService;
    constructor(dsService: DsService);
    getAllDs(): Promise<Ds[]>;
    getOneDs(params: DsParamsDto): Promise<Ds>;
    createDs(createDsDto: CreateDsDto): Promise<Ds>;
    editDs(editDsDto: EditDsDto): Promise<Ds>;
}

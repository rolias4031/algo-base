import { Repository } from 'typeorm';
import { Ds } from './ds.entity';
import { CreateDsDto, EditDsDto } from 'src/dto/Ds.dto';
export declare class DsService {
    private dsRepository;
    constructor(dsRepository: Repository<Ds>);
    findAll(): Promise<Ds[]>;
    findOne(name: string): Promise<Ds>;
    createDs(createDsDto: CreateDsDto): Promise<Ds>;
    editDs(editDsDto: EditDsDto): Promise<Ds>;
}

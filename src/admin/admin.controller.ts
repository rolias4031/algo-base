import { Controller, Post, Put, Body } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAlgoDto, EditAlgoDto } from 'src/dto/Algo.dto';
import { Algo } from 'src/algo/algo.entity';
import { AlgoService } from 'src/algo/algo.service';
import { DsService } from 'src/ds/ds.service';
import { CreateDsDto, EditDsDto } from 'src/dto/Ds.dto';
import { Ds } from 'src/ds/ds.entity';

//protect with the AdminGuard
@Controller('admin')
export class AdminController {
  constructor(
    private adminService: AdminService,
    private algoService: AlgoService,
    private dsService: DsService,
  ) {}

  @Post('createAlgo')
  async createAlgo(@Body() createAlgoDto: CreateAlgoDto): Promise<Algo> {
    return await this.algoService.createAlgo(createAlgoDto);
  }

  @Put('editAlgo')
  async editAlgo(@Body() editAlgoDto: EditAlgoDto): Promise<Algo> {
    return await this.algoService.editAlgo(editAlgoDto);
  }

  @Post('createDs')
  async createDs(@Body() createDsDto: CreateDsDto): Promise<Ds> {
    return await this.dsService.createDs(createDsDto);
  }

  @Put('editDs')
  async editDs(@Body() editDsDto: EditDsDto): Promise<Ds> {
    return await this.dsService.editDs(editDsDto);
  }
}

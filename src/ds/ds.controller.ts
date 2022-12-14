import {
  Controller,
  Get,
  Put,
  Param,
  Post,
  HttpException,
  HttpStatus,
  Body,
  UseGuards,
} from '@nestjs/common';
import { DsService } from './ds.service';
import { Ds } from './ds.entity';
import { DsParamsDto } from 'src/dto/Ds.dto';
import { CreateDsDto, EditDsDto } from 'src/dto/Ds.dto';
import { ApiGuard } from 'src/auth/api.guard';
import { AdminGuard } from 'src/admin/admin.guard';

// controller for all data structure related requests
@Controller('ds')
export class DsController {
  constructor(private dsService: DsService) {}

  // returns all data structures. requires email and api_key
  @UseGuards(ApiGuard)
  @Get('all')
  async getAllDs(): Promise<Ds[]> {
    const dataStructures = await this.dsService.findAll();
    if (!dataStructures) {
      throw new HttpException('Not Found', HttpStatus.BAD_REQUEST);
    }
    return await this.dsService.findAll();
  }

  // returns data structure by param name. requires email and api_key
  @UseGuards(ApiGuard)
  @Get(':dsName')
  async getOneDs(@Param() params: DsParamsDto): Promise<Ds> {
    const ds = await this.dsService.findOne(params.dsName);
    if (!ds) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return ds;
  }

  // create and edit data structures. admin routes.
  @UseGuards(AdminGuard)
  @Post('create')
  async createDs(@Body() createDsDto: CreateDsDto): Promise<Ds> {
    return await this.dsService.createDs(createDsDto);
  }

  @UseGuards(AdminGuard)
  @Put('edit')
  async editDs(@Body() editDsDto: EditDsDto): Promise<Ds> {
    return await this.dsService.editDs(editDsDto);
  }
}

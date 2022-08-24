import {
  Controller,
  Post,
  Get,
  Put,
  Param,
  Body,
  HttpException,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import {
  SearchAlgoDto,
  SortAlgoDto,
  GetAllAlgosDto,
  GetOneAlgoDto,
  CreateAlgoDto,
  EditAlgoDto,
} from 'src/dto/Algo.dto';
import { AlgoService } from './algo.service';
import { Algo } from './algo.entity';
import { ApiGuard } from 'src/auth/api.guard';
import { AdminGuard } from 'src/admin/admin.guard';

/* Controller for algo. Imports services from algo.services. Containts routes for getting and applying all algorithms.
 */
@Controller('algo')
export class AlgoController {
  constructor(private algoService: AlgoService) {}

  // returns all algorithms with a specified type.
  @UseGuards(ApiGuard)
  @Get('type/:algoType')
  async getAllAlgos(@Param() params: GetAllAlgosDto): Promise<Algo[]> {
    return await this.algoService.findAll(params.algoType);
  }

  // returns algorithm by name
  @UseGuards(ApiGuard)
  @Get(':algoName')
  async getAlgo(@Param() params: GetOneAlgoDto): Promise<Algo> {
    const info = await this.algoService.findOne(params.algoName);
    // throw error if no algorithm by that name is found.
    if (!info) {
      throw new HttpException(
        `Cannot Find: ${params.algoName}`,
        HttpStatus.NOT_FOUND,
      );
    }
    return info;
  }

  // applies search algo and returns the data. Uses the body.algoName to get correct function from a map in algoService.searchMap
  @UseGuards(ApiGuard)
  @Post('apply/search')
  applySearch(@Body() body: SearchAlgoDto): string {
    const targetIndex = this.algoService.applySearch(
      body.algoName,
      body.data,
      body.target,
    );
    return `Target is at index ${targetIndex}`;
  }

  // applies sort algo and returns the data. Uses the body.algoName to get correct function from a map in algoService.sortMap.
  @UseGuards(ApiGuard)
  @Post('apply/sort')
  applySort(@Body() body: SortAlgoDto): number[] {
    return this.algoService.applySort(body.algoName, body.data);
  }

  @UseGuards(AdminGuard)
  @Post('create')
  async createAlgo(@Body() createAlgoDto: CreateAlgoDto): Promise<Algo> {
    return await this.algoService.createAlgo(createAlgoDto);
  }

  @UseGuards(AdminGuard)
  @Put('edit')
  async editAlgo(@Body() editAlgoDto: EditAlgoDto): Promise<Algo> {
    return await this.algoService.editAlgo(editAlgoDto);
  }
}

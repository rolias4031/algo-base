import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { SearchBodyDto } from '../dto/SearchBody.dto';
import { SortBodyDto } from '../dto/SortBody.dto';
import { GetAllAlgosDto, GetOneAlgoDto } from '../dto/GetParam.dto';
import { AlgoService } from './algo.service';
import { Algo } from './algo.entity';

/* Controller for algo. Imports services from algo.services. Containts routes for getting and applying all algorithms.
 */
@Controller('algo')
export class AlgoController {
  constructor(private algoService: AlgoService) {}

  // returns all algorithms with a specified type.
  @Get('get-all-algos/:algoType')
  async getAllAlgos(@Param() params: GetAllAlgosDto): Promise<Algo[]> {
    return await this.algoService.findAll(params.algoType);
  }

  // returns algorithm by name
  @Get('get-algo/:algoName')
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
  @Post('apply/search')
  applySearch(@Body() body: SearchBodyDto): string {
    const targetIndex = this.algoService.applySearch(
      body.algoName,
      body.data,
      body.target,
    );
    return `Target is at index ${targetIndex}`;
  }

  // applies sort algo and returns the data. Uses the body.algoName to get correct function from a map in algoService.sortMap.
  @Post('apply/sort')
  applySort(@Body() body: SortBodyDto): number[] {
    return this.algoService.applySort(body.algoName, body.data);
  }
}

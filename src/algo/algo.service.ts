import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Algo } from './algo.entity';
import { searchAlgos } from './algos/search';
import { sortAlgos } from './algos/sort';
import { CreateDsDto } from 'src/dto/CreateDs.dto';

@Injectable({})
export class AlgoService {
  constructor(
    @InjectRepository(Algo)
    private algoRepository: Repository<Algo>,
  ) {}

  searchMap = new Map<string, (arr: number[], target: number) => number>([
    ['binary-search', searchAlgos.binarySearch],
    ['linear-search', searchAlgos.linearSearch],
  ]);

  sortMap = new Map<string, (arr: number[]) => number[]>([
    ['bubble-sort', sortAlgos.bubbleSort],
    ['insertion-sort', sortAlgos.insertionSort],
    ['merge-sort', sortAlgos.mergeSort],
    ['radix-sort', sortAlgos.radixSort],
    ['quick-sort', sortAlgos.quickSort],
  ]);

  async findAll(name: string): Promise<Algo[]> {
    if (name === 'all') {
      return await this.algoRepository.find();
    } else {
      return await this.algoRepository.find({
        where: {
          algoType: name,
        },
      });
    }
  }

  async findOne(name: string): Promise<Algo> {
    return await this.algoRepository.findOneBy({ name: name });
  }

  applySort(algoName: string, data: number[]): number[] {
    const algorithm = this.sortMap.get(algoName);
    const sorted = algorithm(data);
    return sorted;
  }

  applySearch(algoName: string, data: number[], target: number): number {
    const algorithm = this.searchMap.get(algoName);
    const targetIndex = algorithm(data, target);
    return targetIndex;
  }

}

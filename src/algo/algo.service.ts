import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAlgoDto, EditAlgoDto } from 'src/dto/Algo.dto';
import { Repository } from 'typeorm';
import { Algo } from './algo.entity';
import { searchAlgos } from './algos/search';
import { sortAlgos } from './algos/sort';

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

  async createAlgo(createAlgoDto: CreateAlgoDto): Promise<Algo> {
    const duplicate = await this.algoRepository.findOneBy({
      name: createAlgoDto.name,
    });
    if (duplicate) {
      throw new HttpException(
        'That Algo already exists',
        HttpStatus.BAD_REQUEST,
      );
    }
    const newAlgo = this.algoRepository.create(createAlgoDto);
    return await this.algoRepository.save(newAlgo);
  }

  async editAlgo(editAlgoDto: EditAlgoDto): Promise<Algo> {
    const exists = await this.algoRepository.findOneBy({
      name: editAlgoDto.name,
    });
    if (!exists) {
      throw new HttpException("That Algo doesn't exist", HttpStatus.NOT_FOUND);
    }
    await this.algoRepository.update(
      { name: editAlgoDto.name },
      { ...editAlgoDto },
    );
    return await this.algoRepository.findOneBy({ name: editAlgoDto.name });
  }
}

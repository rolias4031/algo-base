import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ds } from './ds.entity';

@Injectable({})
export class DsService {
  constructor(
    @InjectRepository(Ds)
    private dsRepository: Repository<Ds>,
  ) {}

  async findAll(): Promise<Ds[]> {
    return await this.dsRepository.find();
  }

  async findOne(name: string): Promise<Ds> {
    return await this.dsRepository.findOneBy({ name: name });
  }
}

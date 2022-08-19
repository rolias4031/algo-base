import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ds } from './ds.entity';
import { CreateDsDto } from 'src/dto/CreateDs.dto';
import { HttpException, HttpStatus } from '@nestjs/common';

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

  async createDs(createDsDto: CreateDsDto): Promise<Ds> {
    const duplicate = await this.dsRepository.findOneBy({
      name: createDsDto.name,
    });
    if (duplicate) {
      throw new HttpException(
        'That name already exists',
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    const newDs = this.dsRepository.create(createDsDto);
    return await this.dsRepository.save(newDs);
  }
}

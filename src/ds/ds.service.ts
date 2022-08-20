import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ds } from './ds.entity';
import { HttpException, HttpStatus } from '@nestjs/common';
import { CreateDsDto, EditDsDto } from 'src/dto/Ds.dto';

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

  // edit Dto to mandate name
  async editDs(editDsDto: EditDsDto): Promise<Ds> {
    const exists = await this.dsRepository.findOneBy({
      name: editDsDto.name,
    });
    if (!exists) {
      throw new HttpException("That Ds doesn't exist", HttpStatus.BAD_REQUEST);
    }
    await this.dsRepository.update({ name: editDsDto.name }, { ...editDsDto });
    return await this.dsRepository.findOneBy({
      name: editDsDto.name,
    });
  }
}

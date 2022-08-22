import { Module } from '@nestjs/common';
import { Admin } from './admin.entity';
import { AdminService } from './admin.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminController } from './admin.controller';
import { Algo } from 'src/algo/algo.entity';
import { Ds } from 'src/ds/ds.entity';
import { AlgoService } from 'src/algo/algo.service';
import { DsService } from 'src/ds/ds.service';

@Module({
  imports: [TypeOrmModule.forFeature([Admin, Algo, Ds])],
  providers: [AdminService, AlgoService, DsService],
  exports: [AdminService],
  controllers: [AdminController],
})
export class AdminModule {}

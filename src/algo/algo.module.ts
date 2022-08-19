import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlgoController } from './algo.controller';
import { AlgoService } from './algo.service';
import { Algo } from './algo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Algo])],
  controllers: [AlgoController],
  providers: [AlgoService],
})
export class AlgoModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ds } from './ds.entity';
import { DsController } from './ds.controller';
import { DsService } from './ds.service';

@Module({
  imports: [TypeOrmModule.forFeature([Ds])],
  controllers: [DsController],
  providers: [DsService],
})
export class DsModule {}

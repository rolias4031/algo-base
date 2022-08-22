import { Module } from '@nestjs/common';
import { Admin } from './admin.entity';
import { AdminService } from './admin.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminController } from './admin.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Admin])],
  providers: [AdminService],
  exports: [AdminService],
  controllers: [AdminController],
})
export class AdminModule {}

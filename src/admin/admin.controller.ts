import { Controller, Post, Put, Body, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAlgoDto, EditAlgoDto } from 'src/dto/Algo.dto';
import { Algo } from 'src/algo/algo.entity';
import { AlgoService } from 'src/algo/algo.service';
import { DsService } from 'src/ds/ds.service';
import { CreateDsDto, EditDsDto } from 'src/dto/Ds.dto';
import { Ds } from 'src/ds/ds.entity';
import { AdminGuard } from './admin.guard';
import { CreateAdminDto } from 'src/dto/Admin.dto';

//protect with the AdminGuard
@UseGuards(AdminGuard)
@Controller('admin')
export class AdminController {
  constructor(private adminService: AdminService) {}

  @Post('create/admin')
  async createAdmin(@Body() createAdminDto: CreateAdminDto): Promise<string> {
    return await this.adminService.createAdmin(createAdminDto);
  }
}

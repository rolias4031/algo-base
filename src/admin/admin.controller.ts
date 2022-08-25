import { Controller, Post, Put, Body, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminGuard } from './admin.guard';
import { CreateAdminDto } from 'src/dto/Admin.dto';

// controller for creating new admins. protected by AdminGuard
@UseGuards(AdminGuard)
@Controller('admin')
export class AdminController {
  constructor(private adminService: AdminService) {}

  @Post('create')
  async createAdmin(@Body() createAdminDto: CreateAdminDto): Promise<string> {
    return await this.adminService.createAdmin(createAdminDto);
  }
}

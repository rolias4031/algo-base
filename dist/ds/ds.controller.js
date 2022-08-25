"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DsController = void 0;
const common_1 = require("@nestjs/common");
const ds_service_1 = require("./ds.service");
const Ds_dto_1 = require("../dto/Ds.dto");
const Ds_dto_2 = require("../dto/Ds.dto");
const api_guard_1 = require("../auth/api.guard");
const admin_guard_1 = require("../admin/admin.guard");
let DsController = class DsController {
    constructor(dsService) {
        this.dsService = dsService;
    }
    async getAllDs() {
        const dataStructures = await this.dsService.findAll();
        if (!dataStructures) {
            throw new common_1.HttpException('Not Found', common_1.HttpStatus.BAD_REQUEST);
        }
        return await this.dsService.findAll();
    }
    async getOneDs(params) {
        const ds = await this.dsService.findOne(params.dsName);
        if (!ds) {
            throw new common_1.HttpException('Not Found', common_1.HttpStatus.NOT_FOUND);
        }
        return ds;
    }
    async createDs(createDsDto) {
        return await this.dsService.createDs(createDsDto);
    }
    async editDs(editDsDto) {
        return await this.dsService.editDs(editDsDto);
    }
};
__decorate([
    (0, common_1.UseGuards)(api_guard_1.ApiGuard),
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DsController.prototype, "getAllDs", null);
__decorate([
    (0, common_1.UseGuards)(api_guard_1.ApiGuard),
    (0, common_1.Get)(':dsName'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Ds_dto_1.DsParamsDto]),
    __metadata("design:returntype", Promise)
], DsController.prototype, "getOneDs", null);
__decorate([
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Ds_dto_2.CreateDsDto]),
    __metadata("design:returntype", Promise)
], DsController.prototype, "createDs", null);
__decorate([
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Put)('edit'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Ds_dto_2.EditDsDto]),
    __metadata("design:returntype", Promise)
], DsController.prototype, "editDs", null);
DsController = __decorate([
    (0, common_1.Controller)('ds'),
    __metadata("design:paramtypes", [ds_service_1.DsService])
], DsController);
exports.DsController = DsController;
//# sourceMappingURL=ds.controller.js.map
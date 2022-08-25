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
exports.AlgoController = void 0;
const common_1 = require("@nestjs/common");
const Algo_dto_1 = require("../dto/Algo.dto");
const algo_service_1 = require("./algo.service");
const api_guard_1 = require("../auth/api.guard");
const admin_guard_1 = require("../admin/admin.guard");
let AlgoController = class AlgoController {
    constructor(algoService) {
        this.algoService = algoService;
    }
    async getAllAlgos(params) {
        return await this.algoService.findAll(params.algoType);
    }
    async getAlgo(params) {
        const info = await this.algoService.findOne(params.algoName);
        if (!info) {
            throw new common_1.HttpException(`Cannot Find: ${params.algoName}`, common_1.HttpStatus.NOT_FOUND);
        }
        return info;
    }
    applySearch(body) {
        const targetIndex = this.algoService.applySearch(body.algoName, body.data, body.target);
        return `Target is at index ${targetIndex}`;
    }
    applySort(body) {
        return this.algoService.applySort(body.algoName, body.data);
    }
    async createAlgo(createAlgoDto) {
        return await this.algoService.createAlgo(createAlgoDto);
    }
    async editAlgo(editAlgoDto) {
        return await this.algoService.editAlgo(editAlgoDto);
    }
};
__decorate([
    (0, common_1.UseGuards)(api_guard_1.ApiGuard),
    (0, common_1.Get)('type/:algoType'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Algo_dto_1.GetAllAlgosDto]),
    __metadata("design:returntype", Promise)
], AlgoController.prototype, "getAllAlgos", null);
__decorate([
    (0, common_1.UseGuards)(api_guard_1.ApiGuard),
    (0, common_1.Get)(':algoName'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Algo_dto_1.GetOneAlgoDto]),
    __metadata("design:returntype", Promise)
], AlgoController.prototype, "getAlgo", null);
__decorate([
    (0, common_1.UseGuards)(api_guard_1.ApiGuard),
    (0, common_1.Post)('apply/search'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Algo_dto_1.SearchAlgoDto]),
    __metadata("design:returntype", String)
], AlgoController.prototype, "applySearch", null);
__decorate([
    (0, common_1.UseGuards)(api_guard_1.ApiGuard),
    (0, common_1.Post)('apply/sort'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Algo_dto_1.SortAlgoDto]),
    __metadata("design:returntype", Array)
], AlgoController.prototype, "applySort", null);
__decorate([
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Algo_dto_1.CreateAlgoDto]),
    __metadata("design:returntype", Promise)
], AlgoController.prototype, "createAlgo", null);
__decorate([
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Put)('edit'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Algo_dto_1.EditAlgoDto]),
    __metadata("design:returntype", Promise)
], AlgoController.prototype, "editAlgo", null);
AlgoController = __decorate([
    (0, common_1.Controller)('algo'),
    __metadata("design:paramtypes", [algo_service_1.AlgoService])
], AlgoController);
exports.AlgoController = AlgoController;
//# sourceMappingURL=algo.controller.js.map
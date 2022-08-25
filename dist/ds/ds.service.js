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
exports.DsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const ds_entity_1 = require("./ds.entity");
const common_2 = require("@nestjs/common");
let DsService = class DsService {
    constructor(dsRepository) {
        this.dsRepository = dsRepository;
    }
    async findAll() {
        return await this.dsRepository.find();
    }
    async findOne(name) {
        return await this.dsRepository.findOneBy({ name: name });
    }
    async createDs(createDsDto) {
        const duplicate = await this.dsRepository.findOneBy({
            name: createDsDto.name,
        });
        if (duplicate) {
            throw new common_2.HttpException('That name already exists', common_2.HttpStatus.NOT_ACCEPTABLE);
        }
        const newDs = this.dsRepository.create(createDsDto);
        return await this.dsRepository.save(newDs);
    }
    async editDs(editDsDto) {
        const exists = await this.dsRepository.findOneBy({
            name: editDsDto.name,
        });
        if (!exists) {
            throw new common_2.HttpException("That Ds doesn't exist", common_2.HttpStatus.BAD_REQUEST);
        }
        await this.dsRepository.update({ name: editDsDto.name }, Object.assign({}, editDsDto));
        return await this.dsRepository.findOneBy({
            name: editDsDto.name,
        });
    }
};
DsService = __decorate([
    (0, common_1.Injectable)({}),
    __param(0, (0, typeorm_1.InjectRepository)(ds_entity_1.Ds)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DsService);
exports.DsService = DsService;
//# sourceMappingURL=ds.service.js.map
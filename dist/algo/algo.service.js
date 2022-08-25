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
exports.AlgoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const algo_entity_1 = require("./algo.entity");
const search_1 = require("./algos/search");
const sort_1 = require("./algos/sort");
let AlgoService = class AlgoService {
    constructor(algoRepository) {
        this.algoRepository = algoRepository;
        this.searchMap = new Map([
            ['binary-search', search_1.searchAlgos.binarySearch],
            ['linear-search', search_1.searchAlgos.linearSearch],
        ]);
        this.sortMap = new Map([
            ['bubble-sort', sort_1.sortAlgos.bubbleSort],
            ['insertion-sort', sort_1.sortAlgos.insertionSort],
            ['merge-sort', sort_1.sortAlgos.mergeSort],
            ['radix-sort', sort_1.sortAlgos.radixSort],
            ['quick-sort', sort_1.sortAlgos.quickSort],
        ]);
    }
    async findAll(name) {
        if (name === 'all') {
            return await this.algoRepository.find();
        }
        else {
            return await this.algoRepository.find({
                where: {
                    algo_type: name,
                },
            });
        }
    }
    async findOne(name) {
        return await this.algoRepository.findOneBy({ name: name });
    }
    applySort(algoName, data) {
        const algorithm = this.sortMap.get(algoName);
        const sorted = algorithm(data);
        return sorted;
    }
    applySearch(algoName, data, target) {
        const algorithm = this.searchMap.get(algoName);
        const targetIndex = algorithm(data, target);
        return targetIndex;
    }
    async createAlgo(createAlgoDto) {
        const duplicate = await this.algoRepository.findOneBy({
            name: createAlgoDto.name,
        });
        if (duplicate) {
            throw new common_1.HttpException('That Algo already exists', common_1.HttpStatus.BAD_REQUEST);
        }
        const newAlgo = this.algoRepository.create(createAlgoDto);
        return await this.algoRepository.save(newAlgo);
    }
    async editAlgo(editAlgoDto) {
        const exists = await this.algoRepository.findOneBy({
            name: editAlgoDto.name,
        });
        if (!exists) {
            throw new common_1.HttpException("That Algo doesn't exist", common_1.HttpStatus.NOT_FOUND);
        }
        await this.algoRepository.update({ name: editAlgoDto.name }, Object.assign({}, editAlgoDto));
        return await this.algoRepository.findOneBy({ name: editAlgoDto.name });
    }
};
AlgoService = __decorate([
    (0, common_1.Injectable)({}),
    __param(0, (0, typeorm_1.InjectRepository)(algo_entity_1.Algo)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AlgoService);
exports.AlgoService = AlgoService;
//# sourceMappingURL=algo.service.js.map
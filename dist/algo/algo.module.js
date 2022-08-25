"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlgoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const algo_controller_1 = require("./algo.controller");
const algo_service_1 = require("./algo.service");
const algo_entity_1 = require("./algo.entity");
let AlgoModule = class AlgoModule {
};
AlgoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([algo_entity_1.Algo])],
        controllers: [algo_controller_1.AlgoController],
        providers: [algo_service_1.AlgoService],
        exports: [algo_service_1.AlgoService],
    })
], AlgoModule);
exports.AlgoModule = AlgoModule;
//# sourceMappingURL=algo.module.js.map
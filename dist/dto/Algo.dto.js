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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditAlgoDto = exports.CreateAlgoDto = exports.SortAlgoDto = exports.SearchAlgoDto = exports.GetOneAlgoDto = exports.GetAllAlgosDto = void 0;
const class_validator_1 = require("class-validator");
const mapped_types_1 = require("@nestjs/mapped-types");
const allowedTypes_GetAllAlgosDto = ['all', 'search', 'sort'];
class GetAllAlgosDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsIn)(allowedTypes_GetAllAlgosDto),
    __metadata("design:type", String)
], GetAllAlgosDto.prototype, "algoType", void 0);
exports.GetAllAlgosDto = GetAllAlgosDto;
class GetOneAlgoDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetOneAlgoDto.prototype, "algoName", void 0);
exports.GetOneAlgoDto = GetOneAlgoDto;
const allowedName_SearchAlgoDto = ['binary-search', 'linear-search'];
class SearchAlgoDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsIn)(allowedName_SearchAlgoDto),
    __metadata("design:type", String)
], SearchAlgoDto.prototype, "algoName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsInt)({
        each: true,
    }),
    __metadata("design:type", Array)
], SearchAlgoDto.prototype, "data", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], SearchAlgoDto.prototype, "target", void 0);
exports.SearchAlgoDto = SearchAlgoDto;
const allowedNames_SortAlgoDto = [
    'bubble-sort',
    'insertion-sort',
    'merge-sort',
    'radix-sort',
    'quick-sort',
];
class SortAlgoDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsIn)(allowedNames_SortAlgoDto),
    __metadata("design:type", String)
], SortAlgoDto.prototype, "algoName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsInt)({
        each: true,
    }),
    __metadata("design:type", Array)
], SortAlgoDto.prototype, "data", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], SortAlgoDto.prototype, "ascending", void 0);
exports.SortAlgoDto = SortAlgoDto;
class CreateAlgoDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAlgoDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAlgoDto.prototype, "display_name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAlgoDto.prototype, "algo_type", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAlgoDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAlgoDto.prototype, "tc_best", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAlgoDto.prototype, "sc_best", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAlgoDto.prototype, "tc_avg", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAlgoDto.prototype, "sc_avg", void 0);
exports.CreateAlgoDto = CreateAlgoDto;
class EditAlgoDto extends (0, mapped_types_1.PartialType)((0, mapped_types_1.OmitType)(CreateAlgoDto, ['name'])) {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EditAlgoDto.prototype, "name", void 0);
exports.EditAlgoDto = EditAlgoDto;
//# sourceMappingURL=Algo.dto.js.map
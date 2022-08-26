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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const admin_entity_1 = require("./admin.entity");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
let AdminService = class AdminService {
    constructor(adminRepository) {
        this.adminRepository = adminRepository;
    }
    async findOne(email) {
        const admin = await this.adminRepository.findOneBy({ email: email });
        return admin;
    }
    async authorizeAdmin(email, password) {
        const admin = await this.adminRepository.findOneBy({ email: email });
        if (!admin) {
            throw new common_1.HttpException('Admin not found', common_1.HttpStatus.NOT_FOUND);
        }
        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch)
            return false;
        return true;
    }
    async createAdmin(createAdminDto) {
        const adminExists = await this.adminRepository.findOneBy({
            email: createAdminDto.email,
        });
        if (adminExists) {
            throw new common_1.HttpException('email already in use', common_1.HttpStatus.UNPROCESSABLE_ENTITY);
        }
        if (createAdminDto.password !== createAdminDto.confirm) {
            throw new common_1.HttpException("Passwords don't match", common_1.HttpStatus.UNPROCESSABLE_ENTITY);
        }
        const hashedPw = await bcrypt.hash(createAdminDto.password, 10);
        const { confirm } = createAdminDto, newAdmin = __rest(createAdminDto, ["confirm"]);
        newAdmin.password = hashedPw;
        const record = this.adminRepository.create(newAdmin);
        await this.adminRepository.save(record);
        return 'Admin created';
    }
};
AdminService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(admin_entity_1.Admin)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AdminService);
exports.AdminService = AdminService;
//# sourceMappingURL=admin.service.js.map
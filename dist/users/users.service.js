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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./user.entity");
const crypto_1 = require("crypto");
const bcrypt = require("bcrypt");
let UsersService = class UsersService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async findOne(email) {
        const user = await this.userRepository.findOneBy({ email: email });
        return user;
    }
    async allUsers() {
        return await this.userRepository.find();
    }
    async createUser(createUserDto) {
        const exists = await this.userRepository.findOneBy({
            email: createUserDto.email,
        });
        if (exists) {
            throw new common_1.HttpException('Email already in use', common_1.HttpStatus.NOT_ACCEPTABLE);
        }
        if (createUserDto.password !== createUserDto.confirm_password) {
            throw new common_1.HttpException("Password don't match", common_1.HttpStatus.NOT_ACCEPTABLE);
        }
        const hashedPW = await bcrypt.hash(createUserDto.password, 10);
        createUserDto.password = hashedPW;
        const raw_api_key = (0, crypto_1.randomUUID)();
        createUserDto.api_key = await bcrypt.hash(raw_api_key, 10);
        const { confirm_password } = createUserDto, finalUserDto = __rest(createUserDto, ["confirm_password"]);
        const newUser = this.userRepository.create(finalUserDto);
        await this.userRepository.save(newUser);
        return raw_api_key;
    }
    async deleteUser(deleteUserDto) {
        const user = await this.userRepository.findOneBy({
            email: deleteUserDto.email,
        });
        if (!user) {
            throw new common_1.HttpException("That user doesn't exist", common_1.HttpStatus.NOT_FOUND);
        }
        const isMatch = await bcrypt.compare(deleteUserDto.password, user.password);
        if (!isMatch) {
            throw new common_1.HttpException('Incorrect password', common_1.HttpStatus.UNAUTHORIZED);
        }
        await this.userRepository.delete({ email: deleteUserDto.email });
        return 'delete successful';
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)({}),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map
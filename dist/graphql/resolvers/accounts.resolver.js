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
exports.AccountsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const services_1 = require("../../services");
const inputs_1 = require("../../entities/inputs");
const dtos_1 = require("../../entities/dtos");
const account_input_dto_1 = require("../../entities/dtos/account.input.dto");
let AccountsResolver = class AccountsResolver {
    constructor(accountsService) {
        this.accountsService = accountsService;
    }
    async loginAccount(input) {
        return await this.accountsService.login(input);
    }
    async findAccounts(input) {
        return this.accountsService.findAll(input);
    }
    async findOneAccount(input) {
        return this.accountsService.findOne(input);
    }
    async createAccount(accountInputDto) {
        return this.accountsService.upsert(accountInputDto);
    }
};
exports.AccountsResolver = AccountsResolver;
__decorate([
    (0, graphql_1.Query)(() => dtos_1.AccountLoginType),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inputs_1.AccountLoginInput]),
    __metadata("design:returntype", Promise)
], AccountsResolver.prototype, "loginAccount", null);
__decorate([
    (0, graphql_1.Query)(() => [dtos_1.AccountType]),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inputs_1.AccountFilterInput]),
    __metadata("design:returntype", Promise)
], AccountsResolver.prototype, "findAccounts", null);
__decorate([
    (0, graphql_1.Query)((returns) => dtos_1.AccountType),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inputs_1.AccountFilterInput]),
    __metadata("design:returntype", Promise)
], AccountsResolver.prototype, "findOneAccount", null);
__decorate([
    (0, graphql_1.Mutation)((returns) => dtos_1.AccountType),
    __param(0, (0, graphql_1.Args)('accountInputDto')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [account_input_dto_1.AccountInputDto]),
    __metadata("design:returntype", Promise)
], AccountsResolver.prototype, "createAccount", null);
exports.AccountsResolver = AccountsResolver = __decorate([
    (0, graphql_1.Resolver)((of) => dtos_1.AccountType),
    __metadata("design:paramtypes", [services_1.AccountsService])
], AccountsResolver);
//# sourceMappingURL=accounts.resolver.js.map
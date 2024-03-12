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
exports.HistoricsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const dtos_1 = require("../../entities/dtos");
const inputs_1 = require("../../entities/inputs");
const services_1 = require("../../services");
let HistoricsResolver = class HistoricsResolver {
    constructor(historicsService) {
        this.historicsService = historicsService;
    }
    async findHistorics(input) {
        return this.historicsService.findAll(input);
    }
    async findOneHistoric(input) {
        return this.historicsService.findOne(input);
    }
    async createHistoric(input) {
        return this.historicsService.upsert(input);
    }
};
exports.HistoricsResolver = HistoricsResolver;
__decorate([
    (0, graphql_1.Query)(() => [dtos_1.HistoricType]),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inputs_1.HistoricFilterInput]),
    __metadata("design:returntype", Promise)
], HistoricsResolver.prototype, "findHistorics", null);
__decorate([
    (0, graphql_1.Query)(() => dtos_1.HistoricType),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inputs_1.HistoricFilterInput]),
    __metadata("design:returntype", Promise)
], HistoricsResolver.prototype, "findOneHistoric", null);
__decorate([
    (0, graphql_1.Mutation)(() => dtos_1.HistoricType),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inputs_1.HistoricInput]),
    __metadata("design:returntype", Promise)
], HistoricsResolver.prototype, "createHistoric", null);
exports.HistoricsResolver = HistoricsResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [services_1.HistoricsService])
], HistoricsResolver);
//# sourceMappingURL=historics.resolver.js.map
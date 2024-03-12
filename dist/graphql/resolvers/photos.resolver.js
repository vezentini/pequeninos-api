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
exports.PhotosResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const dtos_1 = require("../../entities/dtos");
const inputs_1 = require("../../entities/inputs");
const services_1 = require("../../services");
let PhotosResolver = class PhotosResolver {
    constructor(photosService) {
        this.photosService = photosService;
    }
    async findPhotos(input) {
        return this.photosService.findAll(input);
    }
    async findOnePhoto(input) {
        return this.photosService.findOne(input);
    }
    async upsertPhoto(input) {
        return this.photosService.upsert(input);
    }
};
exports.PhotosResolver = PhotosResolver;
__decorate([
    (0, graphql_1.Query)(() => [dtos_1.PhotoType]),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inputs_1.PhotoFilterInput]),
    __metadata("design:returntype", Promise)
], PhotosResolver.prototype, "findPhotos", null);
__decorate([
    (0, graphql_1.Query)(() => dtos_1.PhotoType),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inputs_1.PhotoFilterInput]),
    __metadata("design:returntype", Promise)
], PhotosResolver.prototype, "findOnePhoto", null);
__decorate([
    (0, graphql_1.Mutation)(() => dtos_1.PhotoType),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inputs_1.PhotoInput]),
    __metadata("design:returntype", Promise)
], PhotosResolver.prototype, "upsertPhoto", null);
exports.PhotosResolver = PhotosResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [services_1.PhotosService])
], PhotosResolver);
//# sourceMappingURL=photos.resolver.js.map
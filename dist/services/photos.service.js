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
exports.PhotosService = void 0;
const mongoose_1 = require("mongoose");
const uuid_1 = require("uuid");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
let PhotosService = class PhotosService {
    constructor(photoModel) {
        this.photoModel = photoModel;
    }
    async upsert(upsertPhotoDto) {
        const upsertObject = { ...upsertPhotoDto };
        if (upsertObject.id === '') {
            upsertObject.id = (0, uuid_1.v4)();
        }
        const upsertPhoto = new this.photoModel(upsertObject);
        await this.photoModel.findOneAndUpdate({ id: upsertObject.id }, { ...upsertObject }, { upsert: true });
        return upsertPhoto;
    }
    async findAll(filter) {
        return this.photoModel.find(filter).exec();
    }
    async findOne(filter) {
        return this.photoModel.findOne(filter).exec();
    }
};
exports.PhotosService = PhotosService;
exports.PhotosService = PhotosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Photo')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], PhotosService);
//# sourceMappingURL=photos.service.js.map
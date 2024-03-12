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
exports.SummariesService = void 0;
const mongoose_1 = require("mongoose");
const uuid_1 = require("uuid");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
let SummariesService = class SummariesService {
    constructor(studentModel) {
        this.studentModel = studentModel;
    }
    async upsert(upsertSummaryDto) {
        const upsertObject = { ...upsertSummaryDto };
        if (upsertObject.id === '') {
            upsertObject.id = (0, uuid_1.v4)();
        }
        const upsertSummary = new this.studentModel(upsertObject);
        await this.studentModel.findOneAndUpdate({ id: upsertObject.id }, { ...upsertObject }, { upsert: true });
        return upsertSummary;
    }
    async findAll(filter) {
        return this.studentModel.find(filter).exec();
    }
    async findOne(filter) {
        return this.studentModel.findOne(filter).exec();
    }
};
exports.SummariesService = SummariesService;
exports.SummariesService = SummariesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Summary')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], SummariesService);
//# sourceMappingURL=summaries.service.js.map
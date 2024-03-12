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
exports.SummaryType = void 0;
const graphql_1 = require("@nestjs/graphql");
const enums_1 = require("../enums");
(0, graphql_1.registerEnumType)(enums_1.SnackConsumnTypes, {
    name: 'SnackConsumnTypes',
});
let SummaryType = class SummaryType {
};
exports.SummaryType = SummaryType;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", String)
], SummaryType.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", String)
], SummaryType.prototype, "studentId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], SummaryType.prototype, "date", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], SummaryType.prototype, "mornningSnack", void 0);
__decorate([
    (0, graphql_1.Field)(() => enums_1.SnackConsumnTypes),
    __metadata("design:type", String)
], SummaryType.prototype, "mornningSnackConsumn", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], SummaryType.prototype, "luncheon", void 0);
__decorate([
    (0, graphql_1.Field)(() => enums_1.SnackConsumnTypes),
    __metadata("design:type", String)
], SummaryType.prototype, "luncheonConsumn", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], SummaryType.prototype, "afternoonSnack", void 0);
__decorate([
    (0, graphql_1.Field)(() => enums_1.SnackConsumnTypes),
    __metadata("design:type", String)
], SummaryType.prototype, "afternoonSnackConsumn", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], SummaryType.prototype, "preDinner", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], SummaryType.prototype, "preDinnerConsumn", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], SummaryType.prototype, "description", void 0);
exports.SummaryType = SummaryType = __decorate([
    (0, graphql_1.ObjectType)()
], SummaryType);
//# sourceMappingURL=summary.dto.js.map
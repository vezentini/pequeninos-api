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
exports.AccountInputDto = void 0;
const graphql_1 = require("@nestjs/graphql");
const enums_1 = require("../enums");
(0, graphql_1.registerEnumType)(enums_1.ProfileTypes, {
    name: 'ProfileTypes',
});
let AccountInputDto = class AccountInputDto {
};
exports.AccountInputDto = AccountInputDto;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", String)
], AccountInputDto.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], AccountInputDto.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], AccountInputDto.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], AccountInputDto.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], AccountInputDto.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], AccountInputDto.prototype, "document", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], AccountInputDto.prototype, "studentIds", void 0);
__decorate([
    (0, graphql_1.Field)(() => enums_1.ProfileTypes),
    __metadata("design:type", String)
], AccountInputDto.prototype, "profile", void 0);
exports.AccountInputDto = AccountInputDto = __decorate([
    (0, graphql_1.InputType)()
], AccountInputDto);
//# sourceMappingURL=account.input.dto.js.map
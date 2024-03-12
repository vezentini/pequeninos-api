"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountSchema = void 0;
const mongoose = require("mongoose");
const enums_1 = require("../../entities/enums");
exports.AccountSchema = new mongoose.Schema({
    id: String,
    name: String,
    username: String,
    password: String,
    phone: String,
    document: String,
    studentIds: [String],
    profile: { type: String, enum: [enums_1.ProfileTypes.ADMIN, enums_1.ProfileTypes.PARENT] },
});
//# sourceMappingURL=account.schema.js.map
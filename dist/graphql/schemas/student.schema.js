"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentSchema = void 0;
const mongoose = require("mongoose");
const enums_1 = require("../../entities/enums");
exports.StudentSchema = new mongoose.Schema({
    id: String,
    name: String,
    gender: { type: String, enum: [enums_1.GenderTypes.MALE, enums_1.GenderTypes.FEMALE] },
    classId: String,
});
//# sourceMappingURL=student.schema.js.map
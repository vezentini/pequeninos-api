"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotoSchema = void 0;
const mongoose = require("mongoose");
const enums_1 = require("../../entities/enums");
exports.PhotoSchema = new mongoose.Schema({
    id: String,
    referenceId: String,
    type: {
        type: String,
        enum: [enums_1.PhotoTypes.ALL, enums_1.PhotoTypes.CLASS, enums_1.PhotoTypes.COMUNICATION],
    },
    photo: String,
});
//# sourceMappingURL=photo.schema.js.map
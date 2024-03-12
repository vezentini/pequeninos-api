"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommunicatedSchema = void 0;
const mongoose = require("mongoose");
const enums_1 = require("../../entities/enums");
exports.CommunicatedSchema = new mongoose.Schema({
    id: String,
    title: String,
    description: String,
    type: {
        type: String,
        enum: [enums_1.CommunicatedTypes.ALL, enums_1.CommunicatedTypes.CLASS],
    },
    photoId: String,
});
//# sourceMappingURL=communicated.schema.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoricSchema = void 0;
const mongoose = require("mongoose");
exports.HistoricSchema = new mongoose.Schema({
    id: String,
    studentIds: String,
    medications: [String],
});
//# sourceMappingURL=historic.schema.js.map
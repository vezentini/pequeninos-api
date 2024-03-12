"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SummarySchema = void 0;
const mongoose = require("mongoose");
const enums_1 = require("../../entities/enums");
const ConsumnTypes = {
    type: String,
    enum: [enums_1.SnackConsumnTypes.ALL, enums_1.SnackConsumnTypes.HALF, enums_1.SnackConsumnTypes.NONE],
};
exports.SummarySchema = new mongoose.Schema({
    id: String,
    studentId: String,
    date: String,
    mornningSnack: String,
    mornningSnackConsumn: ConsumnTypes,
    luncheon: String,
    luncheonConsumn: ConsumnTypes,
    afternoonSnack: String,
    afternoonSnackConsumn: ConsumnTypes,
    preDinner: String,
    preDinnerConsumn: ConsumnTypes,
    description: String,
});
//# sourceMappingURL=summary.schema.js.map
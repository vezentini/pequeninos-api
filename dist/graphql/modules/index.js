"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const accounts_module_1 = require("./accounts.module");
const classes_module_1 = require("./classes.module");
const communicated_module_1 = require("./communicated.module");
const historics_module_1 = require("./historics.module");
const students_module_1 = require("./students.module");
const summaries_module_1 = require("./summaries.module");
exports.default = [
    accounts_module_1.AccountsModule,
    students_module_1.StudentsModule,
    classes_module_1.ClassesModule,
    historics_module_1.HistoricsModule,
    summaries_module_1.SummariesModule,
    communicated_module_1.CommunicatedsModule,
];
//# sourceMappingURL=index.js.map
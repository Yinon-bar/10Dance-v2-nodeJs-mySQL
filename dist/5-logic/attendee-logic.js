"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dal_1 = __importDefault(require("../2-utils/dal"));
// Get all tables
function getAllTables() {
    return __awaiter(this, void 0, void 0, function* () {
        const attendees = yield dal_1.default.execute("SHOW TABLES;");
        return attendees;
    });
}
function getAllAttendees() {
    return __awaiter(this, void 0, void 0, function* () {
        // const attendees = await dal.execute("SELECT * FROM attendees;");
        const attendees = yield dal_1.default.execute("SELECT * FROM attendees;");
        return attendees;
    });
}
function getAttendeeByTableAndId(table, tz_id) {
    return __awaiter(this, void 0, void 0, function* () {
        const attendees = yield dal_1.default.execute(`SELECT * FROM ${table} WHERE tz_id = ${tz_id};`);
        return attendees;
    });
}
function getAllAttFromTable(table) {
    return __awaiter(this, void 0, void 0, function* () {
        // console.log(table);
        const attendees = yield dal_1.default.execute(`SELECT * FROM ${table};`);
        return attendees;
    });
}
exports.default = {
    getAllTables,
    getAllAttendees,
    getAttendeeByTableAndId,
    getAllAttFromTable,
};

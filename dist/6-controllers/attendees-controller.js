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
const express_1 = __importDefault(require("express"));
const attendee_logic_1 = __importDefault(require("../5-logic/attendee-logic"));
const path_1 = __importDefault(require("path"));
const router = express_1.default.Router();
// Welcome page
router.get("/", (req, resp, next) => __awaiter(void 0, void 0, void 0, function* () {
    resp.header("Access-Control-Allow-Origin", "*");
    const pathHTML = path_1.default.join(__dirname, "../public");
    resp.sendFile(pathHTML + "/welcome.html");
}));
// Get all Tables
router.get("/api/tables", (req, resp, next) => __awaiter(void 0, void 0, void 0, function* () {
    resp.header("Access-Control-Allow-Origin", "*");
    const tables = yield attendee_logic_1.default.getAllTables();
    resp.json(tables);
}));
// Get all from specific table
router.get("/api/:table", (req, resp, next) => __awaiter(void 0, void 0, void 0, function* () {
    resp.header("Access-Control-Allow-Origin", "*");
    const tableName = req.params.table;
    const attFromTable = yield attendee_logic_1.default.getAllAttFromTable(tableName);
    resp.json(attFromTable);
}));
// Get all attendees
router.get("/api/attendees", (req, resp, next) => __awaiter(void 0, void 0, void 0, function* () {
    resp.header("Access-Control-Allow-Origin", "*");
    const attendees = yield attendee_logic_1.default.getAllAttendees();
    resp.json(attendees);
}));
// Get by tz_id
router.get("/api/attendees/:tz_id", (req, resp, next) => __awaiter(void 0, void 0, void 0, function* () {
    resp.header("Access-Control-Allow-Origin", "*");
    const attendee = yield attendee_logic_1.default.getAttendeeById(req.params.tz_id);
    resp.json(attendee);
}));
exports.default = router;

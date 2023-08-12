"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = __importDefault(require("mysql2"));
// Local
// const access: ConnectionOptions = {
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "10dance",
// };
// Remote - bluehost - Yinon Bar
const access = {
    host: "50.87.237.60",
    user: "zerdance_yinon",
    password: "INONab@053508384",
    database: "zerdance_general",
};
// Remote - bluehost - yochai
// const access: ConnectionOptions = {
//     host: "50.87.237.60",
//     user: "zerdance_Yochai",
//     password: "Yochai@123456",
//     database: "zerdance_general",
// };
const conn = mysql2_1.default.createPool(access);
// Get all Attendee
function execute(sql) {
    return new Promise((resolve, reject) => {
        conn.query(sql, (_err, rows) => {
            if (_err) {
                reject(_err);
                return;
            }
            resolve(rows);
        });
    });
}
exports.default = {
    execute,
};

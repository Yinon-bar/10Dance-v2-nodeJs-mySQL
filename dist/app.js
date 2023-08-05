"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const attendees_controller_1 = __importDefault(require("./6-controllers/attendees-controller"));
const server = (0, express_1.default)();
server.use(express_1.default.json());
server.use(attendees_controller_1.default);
server.listen(3001, () => {
    console.log("Listening to http://localhost:3001");
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthController = void 0;
const http_status_1 = __importDefault(require("http-status"));
class HealthController {
    constructor() { }
    /*
        const health = {
            status: "ok",
            name:"hexagonal",
            version:"0.0.1",
            eviroment:"Prouccion"
        };
    */
    run(req, res) {
        const health = {
            status: "ok",
            name: "hexagonal",
            version: "0.0.1",
            eviroment: "Prouccion"
        };
        res.status(http_status_1.default.OK).send(health);
    }
}
exports.HealthController = HealthController;

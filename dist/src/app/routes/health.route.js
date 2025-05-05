"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
// import {HealthController } from '../controllers/health.controller';
const index_1 = require("../di/index");
const register = (router) => {
    // const  objController = new HealthController();
    const controller = index_1.container.resolve("healthController");
    router.get("/health", // objController.run
    (req, res) => controller.run(req, res));
};
exports.register = register;

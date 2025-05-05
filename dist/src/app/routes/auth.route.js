"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
// import { AuthController } from '../controllers/auth.controller';
const index_1 = require("../di/index");
const register = (router) => {
    // const  objController = new AuthController();
    const controller = index_1.container.resolve("authController");
    router.post("/auth", /*objController.run*/ (req, res) => controller.run(req, res));
};
exports.register = register;

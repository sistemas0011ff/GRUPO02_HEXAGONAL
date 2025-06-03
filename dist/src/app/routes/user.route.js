"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const index_1 = require("../di/index");
const register = (router) => {
    const controller = index_1.container.resolve("userController");
    router.get("/users", controller.run);
    router.post("/users", controller.create);
};
exports.register = register;

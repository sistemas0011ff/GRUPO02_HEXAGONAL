"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouterFactory = void 0;
const express_1 = require("express");
class RouterFactory {
    static create(basePath, container) {
        const router = (0, express_1.Router)();
        const routesModules = require('./index');
        if (typeof routesModules.registerRoutes === "function") {
            routesModules.registerRoutes(router);
        }
        return router;
    }
}
exports.RouterFactory = RouterFactory;

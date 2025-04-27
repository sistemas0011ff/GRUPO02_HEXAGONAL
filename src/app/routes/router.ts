import { AwilixContainer } from "awilix";
import { Router } from "express";

export class RouterFactory {
    static create(basePath: string, container?: AwilixContainer) : Router{
        const router = Router();
        const routesModules = require('./index');
        if(typeof routesModules.registerRoutes === "function"){
            routesModules.registerRoutes(router)
        }
        return router;
    }
}
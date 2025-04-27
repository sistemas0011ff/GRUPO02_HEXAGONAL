import { Router } from 'express'
// import {HealthController } from '../controllers/health.controller';
import { container } from '../di/index';

export const register = (router: Router): void => {
    // const  objController = new HealthController();
    const controller = container.resolve("healthController");
    router.get("/health", // objController.run
        (req, res) => controller.run(req, res)
    );
}
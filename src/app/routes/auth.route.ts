import { Router } from 'express'
// import { AuthController } from '../controllers/auth.controller';
import { container } from '../di/index';

export const register = (router: Router): void => {
    // const  objController = new AuthController();
    const controller = container.resolve("authController");
    router.post("/auth", /*objController.run*/
        (req, res) => controller.run(req, res)
    );
}
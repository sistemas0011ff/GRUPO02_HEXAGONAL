import { Router } from "express";
import { container } from "../di/index";

export const register = (router: Router) : void => {
    const controller  =  container.resolve("userController");

    router.get("/users", controller.run);
    router.post("/users", controller.create);
}
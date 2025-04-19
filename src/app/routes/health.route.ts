import { Router } from 'express'
import status from 'http-status';

export const register = (router: Router): void => {
    router.get("/health", (req, res) => {
        const health = {
            status: "ok",
            name:"hexagonal",
            version:"0.0.1",
            eviroment:"Prouccion"
        };
        res.status(status.OK).send(health);
    });
}
import { Request, Response } from 'express';
import status from 'http-status';

export class HealthController {

    constructor() {}

    /*
        const health = {
            status: "ok",
            name:"hexagonal",
            version:"0.0.1",
            eviroment:"Prouccion"
        };
    */

    run(req: Request, res: Response): void{
        const health = {
            status: "ok",
            name:"hexagonal",
            version:"0.0.1",
            eviroment:"Prouccion"
        };

        res.status(status.OK).send(health);
    }

}
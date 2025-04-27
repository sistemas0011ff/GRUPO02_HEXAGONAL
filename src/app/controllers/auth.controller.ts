import { Request, Response } from 'express';
import status from 'http-status';

export class AuthController {

    run(req: Request, res: Response): void{
       
        res.status(status.OK).send({
            message:"Autenticación exitosa",
            token:"Token-213243242",
            expireIn: 3600
        });
    }

}
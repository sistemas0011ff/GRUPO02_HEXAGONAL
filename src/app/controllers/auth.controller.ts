import { Request, Response } from 'express';
import status from 'http-status';
import { IAuthApplicationService } from '../../context/auth/application/interface/auth-application.service.interface';

/*
Principio solid: Principio de sustituci+on 
const authApplicationService = new AuthApplicationService()---> tiene implementada la interfaz padre: IAuthApplicationService;
const controller = new AuthController(authApplicationService);

*/

export class AuthController {

    constructor(private authApplicationService: IAuthApplicationService) {}
    /*
    constructor(private authApplicationService: IAuthApplicationService) {}
    */

    async run(req: Request, res: Response): Promise<void> {        
        const result = await this.authApplicationService.login(req.body);
        
        res.status(status.OK).send({
            message:"Autenticación exitosa",
            token: result.token,
            expireIn: result.expireIn,
            userId: result.userId
        });
    }

}
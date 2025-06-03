import {Request, Response} from 'express';
import { IUserApplicationService } from '../../context/auth/application/interface/userApplicationService.interface';
import { CreateUserDto } from '../../context/auth/application/dto/createUser.dto';

export class UserController {

    constructor(private userApplicationService: IUserApplicationService) {}

    run = async(req: Request, res: Response): Promise<void> => {
        try {
            const users = await this.userApplicationService.listAll();
            res.status(200).json({
                success: true,
                data: users,
                total: users.length
            });
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Error interno del servidor' ;
            res.status(500).json({
                success: false,
                error: errorMessage
            });
        }

    }

    create = async(req: Request, res: Response): Promise<void> => {
        try {
          
            const { email, password, name } = req.body;

            const createUserDto : CreateUserDto = {
                email, password, name
            }
            
            const result = await this.userApplicationService.createUser(createUserDto);

            res.status(200).json({                
                success: true,
                data: result,
                message: "Usuario creado exitosamente"
            });
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Error interno del servidor' ;
            res.status(500).json({
                success: false,
                error: errorMessage
            });
        }

    }
}
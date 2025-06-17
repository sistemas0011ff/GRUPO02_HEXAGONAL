import {Request, Response} from 'express';
import { IUserApplicationService } from '../../context/auth/application/interface/userApplicationService.interface';
import { CreateUserDto } from '../../context/auth/application/dto/createUser.dto';
import { IQueryBus } from '../../context/shared/IQueryBus';
import { GetAllUsersQuery } from '../../context/auth/application/queries/GetAllUsersQuery';
import { GetAllUsersQueryResult } from '../../context/auth/application/queries/GetAllUsersQueryResult';
import { error } from 'console';
import { GetUserByIdQuery } from '../../context/auth/application/queries/GetUserByIdQuery';
import { GetUserByIdQueryResult } from '../../context/auth/application/queries/GetUserByIdQueryResult';

export class UserController {

    // constructor(private userApplicationService: IUserApplicationService) {}
    constructor(
        private userApplicationService: IUserApplicationService,
        private queryBus: IQueryBus,
    ) {}

    run = async(req: Request, res: Response): Promise<void> => {
        try {
            /*
            const users = await this.userApplicationService.listAll();
            res.status(200).json({
                success: true,
                data: users,
                total: users.length
            });
            */

            const page = req.query.page ? parseInt(req.query.page as string) : undefined;
            const limit = req.query.limit ? parseInt(req.query.limit as string) : undefined;

            const qurey = new GetAllUsersQuery(page, limit);
            const result = await this.queryBus.send<GetAllUsersQueryResult>(qurey);

            if (!result.success) {
                res.status(400).json({
                    success: false,
                    error: result.message
                });
            }

            res.status(200).json({
                success: true,
                data: result.users,
                total: result.total,
                message: result.message
            });

        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Error interno del servidor' ;
            res.status(500).json({
                success: false,
                error: errorMessage
            });
        }

    } 


    getById = async(req: Request, res: Response): Promise<void> => {
        try {
            
            const { id } = req.params;

            const qurey = new GetUserByIdQuery(id);
            const result = await this.queryBus.send<GetUserByIdQueryResult>(qurey);

            if (!result.success) {
                res.status(404).json({
                    success: false,
                    error: result.message
                });
            }

            res.status(200).json({
                success: true,
                data: result.user,
                message: result.message
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
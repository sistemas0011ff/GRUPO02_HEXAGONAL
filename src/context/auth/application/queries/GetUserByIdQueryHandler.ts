import { IQueryHandler } from "../../../shared/IQueryHandler";
import { IUserRepository } from "../../domain/respositories/user.repository.interface";
import { GetUserByIdQuery } from "./GetUserByIdQuery";
import { GetUserByIdQueryResult } from "./GetUserByIdQueryResult";

export class GetUserByIdQueryHandler implements IQueryHandler<GetUserByIdQuery, GetUserByIdQueryResult> {

    constructor(private userRepository: IUserRepository){}

    async handle(query: GetUserByIdQuery): Promise<GetUserByIdQueryResult> {
        
        try {
            query.validate();
            
            const user = await this.userRepository.findById(query.userId);
            if(!user){
                return {
                    success: false,
                    message: "Usuario no encontrad"
                };
            }

            return {
                success: true,
                message: "Usuario encontrado exitosamente",
                user:{
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    createdAt: user.createdAt
                }
            }

        } catch (error) {
            return {
                success: false,
                message: error instanceof Error ? error.message : 'Error interno del servidor'
            }
        }

    }
}
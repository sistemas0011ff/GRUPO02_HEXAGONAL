import { IQueryHandler } from "../../../shared/IQueryHandler";
import { IUserRepository } from "../../domain/respositories/user.repository.interface";
import { GetAllUsersQuery } from "./GetAllUsersQuery";
import { GetAllUsersQueryResult } from "./GetAllUsersQueryResult";

export class GetAllUsersQueryHandler  implements IQueryHandler<GetAllUsersQuery, GetAllUsersQueryResult>{

    constructor(private userRepository: IUserRepository){}

    async handle(query: GetAllUsersQuery): Promise<GetAllUsersQueryResult> {

        try {
            query.validate();

            const users = await this.userRepository.findAll();

            let paginatedUsers = users;

            if (query.page && query.limit){
                const startIndex =  (query.page - 1) * query.limit;
                const endIndex = startIndex + query.limit;
                paginatedUsers = users.slice(startIndex, endIndex)
            }

            return {
                success: true,
                message: "Usuarios encontrados exitosamente",
                users: paginatedUsers.map(user => ({
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    createdAt: user.createdAt
                })),
                total: users.length
            }    
        } catch (error) {
            return {
                success: false,
                message: error instanceof Error ? error.message : 'Error interno del servidor'
            }
        }

        
    }

}
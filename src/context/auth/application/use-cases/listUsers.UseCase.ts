import { IUserRepository } from "../../domain/respositories/user.repository.interface";
import { UserDto } from "../dto/user.dto";
import { IListUsersUseCase } from "../interface/listUsersUseCase.interface";

export class ListUsersUseCase implements IListUsersUseCase {

    constructor(private userRepository: IUserRepository) {}

    async execute(): Promise<UserDto[]> {
        
        const users = await this.userRepository.findAll();
        return users.map(user => ({
            id: user.id,
            email: user.email,
            name: user.name,
            createdAt: user.createdAt
        }));       

    }

}
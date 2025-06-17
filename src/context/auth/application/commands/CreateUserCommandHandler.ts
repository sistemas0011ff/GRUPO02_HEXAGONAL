import { ICommandHandler } from "../../../shared/ICommandHandler";
import { User } from "../../domain/entity/user.aggregate";
import { IUserRepository } from "../../domain/respositories/user.repository.interface";
import { CreateUserCommandResultDto } from "../dto/CreateUserCommandResultDto";
import { CreateUserCommand } from "./CreateUserCommand";
import { CreateUserCommandResult } from "./CreateUserCommandResult";
 
export class CreateUserCommandHandler implements ICommandHandler<CreateUserCommand, CreateUserCommandResult>{
 
    constructor(private userRepository: IUserRepository) {}
    
    async handle(command: CreateUserCommand): Promise<CreateUserCommandResult> {

        try {
            
            command.validate();
            const existingUser = await this.userRepository.findByEmail(command.data.email);
            if (existingUser) {
                throw new Error("El email ya existe");
            }

            const newUser : User = {
                id: this.generateId(),
                email: command.data.email.toLowerCase().trim(),
                password: command.data.password,
                name: command.data.name,
                createdAt: new Date()
            }

            await this.userRepository.save(newUser);

            const resultDto: CreateUserCommandResultDto = {
                id: newUser.id,
                success: true
            }

            return  {
                success: true,
                message: "Usuario creado exitosamente",
                userId: newUser.id,
                data: resultDto
            }

        } catch (error) {
            return  {
                success: true,
                message: error instanceof Error ? error.message : "Error interno del servidor"
            }
        }
    }

    private generateId(): string {
        return Date.now().toString() + Math.random().toString(36).substr(2,9)
    }   

}
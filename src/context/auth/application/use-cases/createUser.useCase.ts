import { ICommandBus } from "../../../shared/ICommandBus";
import { CreateUserCommand } from "../commands/CreateUserCommand";
import { CreateUserCommandResult } from "../commands/CreateUserCommandResult";
import { CreateUserDto } from "../dto/createUser.dto";
import { CreateUserResultDto } from "../dto/createUserResult.dto";
import { ICreateUserUseCase } from "../interface/createUserUseCase.interface";

export class CreateUserUseCase implements ICreateUserUseCase {

    constructor(private readonly commandBus: ICommandBus){}
    
    async excute(userData: CreateUserDto): Promise<CreateUserResultDto> {

        try {
            
            //1. Crear comand, basado en el DTO
            const command = new CreateUserCommand({
                email: userData.email,
                password: userData.password,
                name: userData.name
            });

            //2. Ejecutar el manejador de forma desacoplada
            const result: CreateUserCommandResult = await this.commandBus.send(command);

            if (!result.success){
                throw new Error(result?.message || "Error al crear usuario");
            }

            //Retornamos el resultado
            return result.data!;

        } catch (error) {
            console.log("Error al crear usuario", error);
            throw error;
            
        }
        
    }



}
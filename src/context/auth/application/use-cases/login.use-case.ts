import { IUserRepository } from "../../domain/respositories/user.repository.interface";
import { LoginResultDto } from "../dto/login-result.dto";
import { ILoginUseCase } from "../interface/login.use-case.interface";

export class LoginUseCase implements ILoginUseCase {

    constructor(private userRepository: IUserRepository){}

    async execute(email: string, password: string): Promise<LoginResultDto> {
        console.log("Ingresé al caso de uso: LoginUseCase");
        const user = await this.userRepository.findByEmail(email);

        if (!user){
            throw new Error("Usuario no encontrado");
        }

        if (user.password != password){
            throw new Error("Contraseña incorrecta");
        }

        //simular la creación de un token
        
        const token = `Token-${user.id}-${Date.now()}`;
        const expiresIn = 3600;

        return {
            token,
            expiresIn,
            userId: user.id
        }

    }

}
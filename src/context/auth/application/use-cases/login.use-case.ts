import { LoginResultDto } from "../dto/login-result.dto";
import { ILoginUseCase } from "../interface/login.use-case.interface";

export class LoginUseCase implements ILoginUseCase {

    async execute(email: string, password: string): Promise<LoginResultDto> {
        console.log("Ingresé al caso de uso: LoginUseCase");
        throw new Error("Method not implemented.");
    }

}
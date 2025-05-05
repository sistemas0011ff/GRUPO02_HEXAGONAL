import { LoginRequestDto } from "../dto/login-request.dto";
import { LoginResponsetDto } from "../dto/login-response.dto";
import { IAuthApplicationService } from "../interface/auth-application.service.interface";
import { ILoginUseCase } from "../interface/login.use-case.interface";
import { ValidatePasswordFromatUseCase } from "../use-cases/validate-password-format.use-case";


export class AuthApplicationService implements IAuthApplicationService {

    constructor(
        private loginUseCase: ILoginUseCase,
        private validatePasswordFromatUseCase: ValidatePasswordFromatUseCase
    ){}

    async login(request: LoginRequestDto): Promise<LoginResponsetDto> {
        
        const  isValidFormat = await this.validatePasswordFormat(request.password);

        
        if (!isValidFormat){
            throw new Error("El formato de la contraseña no es válido");
        }

        const result = await this.loginUseCase.execute(request.email, request.password);

        return {
            token: result.token,
            expireIn: result.expiresIn,
            userId: result.userId
        }
    }
    async validatePasswordFormat(password: string): Promise<boolean> {
        return this.validatePasswordFromatUseCase.excute(password);
    }

}
import { LoginResultDto } from "../dto/login-result.dto";

export interface ILoginUseCase {
    execute(email: string, password: string): Promise<LoginResultDto>
}
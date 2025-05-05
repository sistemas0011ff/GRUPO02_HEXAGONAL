import { LoginRequestDto } from "../dto/login-request.dto";
import { LoginResponsetDto } from "../dto/login-response.dto";

export interface IAuthApplicationService {
    login(request: LoginRequestDto):Promise<LoginResponsetDto>;
    validatePasswordFormat(password: string): Promise<boolean>;
}
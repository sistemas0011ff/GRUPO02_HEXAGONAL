import { CreateUserDto } from "../dto/createUser.dto";
import { CreateUserResultDto } from "../dto/createUserResult.dto";

export interface ICreateUserUseCase {
    excute(userData: CreateUserDto): Promise<CreateUserResultDto>
}
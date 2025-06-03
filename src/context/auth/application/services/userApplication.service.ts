import { CreateUserDto } from "../dto/createUser.dto";
import { CreateUserResultDto } from "../dto/createUserResult.dto";
import { UserDto } from "../dto/user.dto";
import { ICreateUserUseCase } from "../interface/createUserUseCase.interface";
import { IListUsersUseCase } from "../interface/listUsersUseCase.interface";
import { IUserApplicationService } from "../interface/userApplicationService.interface";

export class UserApplicationService implements IUserApplicationService {

    constructor(private listUsersUseCase: IListUsersUseCase,
                private createUserUseCase: ICreateUserUseCase
    ) {}
    
    async listAll(): Promise<UserDto[]> {
        
        const users = await this.listUsersUseCase.execute();
        return users;
    }

    async createUser(userData: CreateUserDto): Promise<CreateUserResultDto> {
        const result = await this.createUserUseCase.excute(userData);
        return result;

    }

}
import { CreateUserDto } from "../dto/createUser.dto";
import { CreateUserResultDto } from "../dto/createUserResult.dto";
import { UserDto } from "../dto/user.dto";

export interface IUserApplicationService {
    listAll(): Promise<UserDto[]>;
    createUser(userData: CreateUserDto) : Promise<CreateUserResultDto>;
}
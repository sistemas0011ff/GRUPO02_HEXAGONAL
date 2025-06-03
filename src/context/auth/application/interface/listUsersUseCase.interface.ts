import { UserDto } from "../dto/user.dto";

export interface IListUsersUseCase {
    execute() : Promise<UserDto[]>
}
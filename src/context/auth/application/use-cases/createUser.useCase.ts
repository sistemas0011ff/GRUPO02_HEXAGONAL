import { User } from "../../domain/entity/user.aggregate";
import { IUserRepository } from "../../domain/respositories/user.repository.interface";
import { CreateUserDto } from "../dto/createUser.dto";
import { CreateUserResultDto } from "../dto/createUserResult.dto";
import { ICreateUserUseCase } from "../interface/createUserUseCase.interface";

export class CreateUserUseCase implements ICreateUserUseCase {

    constructor(private readonly bus......)
    
    async excute(userData: CreateUserDto): Promise<CreateUserResultDto> {

        
        return {
           id: newUser.id,
           success: true 
        }
    }



}
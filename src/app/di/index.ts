import { asClass, asFunction, createContainer, InjectionMode } from "awilix";
import { AuthController } from "../controllers/auth.controller";
import { HealthController } from "../controllers/health.controller";
import { AuthApplicationService } from "../../context/auth/application/services/auth-application.service";
import { LoginUseCase } from "../../context/auth/application/use-cases/login.use-case";
import { ValidatePasswordFromatUseCase } from "../../context/auth/application/use-cases/validate-password-format.use-case";
import { InMemoryUserRepository } from "../../context/auth/infrastructure/in-memory-user.repository";
import { ListUsersUseCase } from "../../context/auth/application/use-cases/listUsers.UseCase";
import { UserApplicationService } from "../../context/auth/application/services/userApplication.service";
import { UserController } from "../controllers/user.controller";
import { CreateUserUseCase } from "../../context/auth/application/use-cases/createUser.useCase";
import { CreateUserCommandHandler } from "../../context/auth/application/commands/CreateUserCommandHandler";
import { CommandBus } from "../../context/shared/CommandBus";
import { GetUserByIdQueryHandler } from "../../context/auth/application/queries/GetUserByIdQueryHandler";
import { GetAllUsersQueryHandler } from "../../context/auth/application/queries/GetAllUsersQueryHandler";
import { QueryBus } from "../../context/shared/QuerydBus";

const container = createContainer({
    injectionMode: InjectionMode.CLASSIC
}); 

container.register({
    //Convención: identificador: [Controller]
    healthController: asClass(HealthController).singleton(),
    authController: asClass(AuthController).singleton(),
    userController: asClass(UserController).singleton(),

    //Servicios de aplicación
    authApplicationService: asClass(AuthApplicationService).singleton(),//const  authApplicationService = new AuthApplicationService()
    userApplicationService: asClass(UserApplicationService).singleton(),

    //Casos de uso
    loginUseCase: asClass(LoginUseCase).singleton(),    
    validatePasswordFromatUseCase: asClass(ValidatePasswordFromatUseCase).singleton(),
    listUsersUseCase: asClass(ListUsersUseCase).singleton(),
    createUserUseCase: asClass(CreateUserUseCase).singleton(),

    //Repo
    userRepository: asClass(InMemoryUserRepository).singleton(),
    createUserCommandHandler: asClass(CreateUserCommandHandler).singleton(),

    //Query Handlers
    getUserByIdQueryHandler: asClass(GetUserByIdQueryHandler).singleton(),
    getAllUsersQueryHandler: asClass(GetAllUsersQueryHandler).singleton(),

    //Buses
    commandBus: asFunction(()=>{
        //inyectarle el contendor al commandbus
        return new CommandBus(container);
    }).singleton(), 

    queryBus: asFunction(()=>{
        //inyectarle el contendor al commandbus
        return new QueryBus(container);
    }).singleton(), 

});



export { container };
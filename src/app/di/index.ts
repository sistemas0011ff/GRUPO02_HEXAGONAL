import { asClass, createContainer, InjectionMode } from "awilix";
import { AuthController } from "../controllers/auth.controller";
import { HealthController } from "../controllers/health.controller";
import { AuthApplicationService } from "../../context/auth/application/services/auth-application.service";
import { LoginUseCase } from "../../context/auth/application/use-cases/login.use-case";
import { ValidatePasswordFromatUseCase } from "../../context/auth/application/use-cases/validate-password-format.use-case";

const container = createContainer({
    injectionMode: InjectionMode.CLASSIC
});

container.register({
    //Convención: identificador: [Controller]
    healthController: asClass(HealthController).singleton(),
    authController: asClass(AuthController).singleton(),

    //Servicios de aplicación
    authApplicationService: asClass(AuthApplicationService).singleton(),//const  authApplicationService = new AuthApplicationService()

    //Casos de uso
    loginUseCase: asClass(LoginUseCase).singleton(),    
    validatePasswordFromatUseCase: asClass(ValidatePasswordFromatUseCase).singleton(),

});



export { container };
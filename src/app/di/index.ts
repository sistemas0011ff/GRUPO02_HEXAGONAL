import { asClass, createContainer, InjectionMode } from "awilix";
import { AuthController } from "../controllers/auth.controller";
import { HealthController } from "../controllers/health.controller";

const container = createContainer({
    injectionMode: InjectionMode.PROXY
});

container.register({
    //Convención: identificador: [Controller]
    healthController: asClass(HealthController).singleton(),
    authController: asClass(AuthController).singleton(),
});

export { container };
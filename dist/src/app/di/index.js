"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = void 0;
const awilix_1 = require("awilix");
const auth_controller_1 = require("../controllers/auth.controller");
const health_controller_1 = require("../controllers/health.controller");
const auth_application_service_1 = require("../../context/auth/application/services/auth-application.service");
const login_use_case_1 = require("../../context/auth/application/use-cases/login.use-case");
const validate_password_format_use_case_1 = require("../../context/auth/application/use-cases/validate-password-format.use-case");
const container = (0, awilix_1.createContainer)({
    injectionMode: awilix_1.InjectionMode.CLASSIC
});
exports.container = container;
container.register({
    //Convención: identificador: [Controller]
    healthController: (0, awilix_1.asClass)(health_controller_1.HealthController).singleton(),
    authController: (0, awilix_1.asClass)(auth_controller_1.AuthController).singleton(),
    //Servicios de aplicación
    authApplicationService: (0, awilix_1.asClass)(auth_application_service_1.AuthApplicationService).singleton(), //const  authApplicationService = new AuthApplicationService()
    //Casos de uso
    loginUseCase: (0, awilix_1.asClass)(login_use_case_1.LoginUseCase).singleton(),
    validatePasswordFromatUseCase: (0, awilix_1.asClass)(validate_password_format_use_case_1.ValidatePasswordFromatUseCase).singleton(),
});

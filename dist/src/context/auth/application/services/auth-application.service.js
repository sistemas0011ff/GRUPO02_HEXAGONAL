"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthApplicationService = void 0;
class AuthApplicationService {
    constructor(loginUseCase, validatePasswordFromatUseCase) {
        this.loginUseCase = loginUseCase;
        this.validatePasswordFromatUseCase = validatePasswordFromatUseCase;
    }
    login(request) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Ingresé al login del servicio de aplicación");
            yield this.validatePasswordFormat(request.password);
            yield this.loginUseCase.execute(request.email, request.password);
            throw new Error("Method not implemented.");
        });
    }
    validatePasswordFormat(password) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.validatePasswordFromatUseCase.excute(password);
        });
    }
}
exports.AuthApplicationService = AuthApplicationService;

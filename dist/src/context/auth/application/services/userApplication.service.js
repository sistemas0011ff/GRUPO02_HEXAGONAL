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
exports.UserApplicationService = void 0;
class UserApplicationService {
    constructor(listUsersUseCase, createUserUseCase) {
        this.listUsersUseCase = listUsersUseCase;
        this.createUserUseCase = createUserUseCase;
    }
    listAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.listUsersUseCase.execute();
            return users;
        });
    }
    createUser(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.createUserUseCase.excute(userData);
            return result;
        });
    }
}
exports.UserApplicationService = UserApplicationService;

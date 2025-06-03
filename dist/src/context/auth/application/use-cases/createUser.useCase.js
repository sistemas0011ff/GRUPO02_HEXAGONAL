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
exports.CreateUserUseCase = void 0;
class CreateUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    excute(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingUser = yield this.userRepository.findByEmail(userData.email);
            if (existingUser) {
                throw new Error("El email ya existe");
            }
            const newUser = {
                id: this.generateId(),
                email: userData.email,
                password: userData.password,
                name: userData.name,
                createdAt: new Date()
            };
            yield this.userRepository.save(newUser);
            return {
                id: newUser.id,
                success: true
            };
        });
    }
    generateId() {
        return Date.now().toString() + Math.random().toString(36).substr(2, 9);
    }
}
exports.CreateUserUseCase = CreateUserUseCase;

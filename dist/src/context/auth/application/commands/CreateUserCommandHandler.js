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
exports.CreateUserCommandHandler = void 0;
class CreateUserCommandHandler {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    handle(command) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                command.validate();
                const existingUser = yield this.userRepository.findByEmail(command.data.email);
                if (existingUser) {
                    throw new Error("El email ya existe");
                }
                const newUser = {
                    id: this.generateId(),
                    email: command.data.email.toLowerCase().trim(),
                    password: command.data.password,
                    name: command.data.name,
                    createdAt: new Date()
                };
                yield this.userRepository.save(newUser);
                const resultDto = {
                    id: newUser.id,
                    success: true
                };
                return {
                    success: true,
                    message: "Usuario creado exitosamente",
                    userId: newUser.id,
                    data: resultDto
                };
            }
            catch (error) {
                return {
                    success: true,
                    message: error instanceof Error ? error.message : "Error interno del servidor"
                };
            }
        });
    }
    generateId() {
        return Date.now().toString() + Math.random().toString(36).substr(2, 9);
    }
}
exports.CreateUserCommandHandler = CreateUserCommandHandler;

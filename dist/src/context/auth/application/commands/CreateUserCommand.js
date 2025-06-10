"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserCommand = void 0;
class CreateUserCommand {
    constructor(data) {
        this.data = data;
    }
    validate() {
        const errors = [];
        if (!this.data.email) {
            errors.push("Email es requerido");
        }
        if (!this.data.password) {
            errors.push("Password es requerido");
        }
        if (!this.data.name) {
            errors.push("Name es requerido");
        }
        if (this.data.email && !this.data.email.includes('@')) {
            errors.push("Email inválido");
        }
        if (errors.length > 0) {
            throw new Error(errors.join(', '));
        }
    }
}
exports.CreateUserCommand = CreateUserCommand;

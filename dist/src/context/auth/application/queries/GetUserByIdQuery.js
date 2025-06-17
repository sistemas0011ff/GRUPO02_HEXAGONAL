"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserByIdQuery = void 0;
class GetUserByIdQuery {
    constructor(userId) {
        this.userId = userId;
    }
    validate() {
        if (!this.userId || this.userId.trim() === '') {
            throw new Error("El Id del usuario es requerido");
        }
    }
}
exports.GetUserByIdQuery = GetUserByIdQuery;

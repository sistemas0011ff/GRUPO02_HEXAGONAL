"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllUsersQuery = void 0;
class GetAllUsersQuery {
    constructor(page, limit) {
        this.page = page;
        this.limit = limit;
    }
    validate() {
        if (this.page !== undefined && this.page < 1) {
            throw new Error('La página debe ser mayor a 0');
        }
        if (this.limit !== undefined && this.limit < 1) {
            throw new Error('El límite debe ser mayor a 0');
        }
    }
}
exports.GetAllUsersQuery = GetAllUsersQuery;

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
exports.GetAllUsersQueryHandler = void 0;
class GetAllUsersQueryHandler {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    handle(query) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                query.validate();
                const users = yield this.userRepository.findAll();
                let paginatedUsers = users;
                if (query.page && query.limit) {
                    const startIndex = (query.page - 1) * query.limit;
                    const endIndex = startIndex + query.limit;
                    paginatedUsers = users.slice(startIndex, endIndex);
                }
                return {
                    success: true,
                    message: "Usuarios encontrados exitosamente",
                    users: paginatedUsers.map(user => ({
                        id: user.id,
                        email: user.email,
                        name: user.name,
                        createdAt: user.createdAt
                    })),
                    total: users.length
                };
            }
            catch (error) {
                return {
                    success: false,
                    message: error instanceof Error ? error.message : 'Error interno del servidor'
                };
            }
        });
    }
}
exports.GetAllUsersQueryHandler = GetAllUsersQueryHandler;

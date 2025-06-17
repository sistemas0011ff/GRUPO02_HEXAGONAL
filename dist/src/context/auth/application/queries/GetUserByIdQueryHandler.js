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
exports.GetUserByIdQueryHandler = void 0;
class GetUserByIdQueryHandler {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    handle(query) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                query.validate();
                const user = yield this.userRepository.findById(query.userId);
                if (!user) {
                    return {
                        success: false,
                        message: "Usuario no encontrad"
                    };
                }
                return {
                    success: true,
                    message: "Usuario encontrado exitosamente",
                    user: {
                        id: user.id,
                        email: user.email,
                        name: user.name,
                        createdAt: user.createdAt
                    }
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
exports.GetUserByIdQueryHandler = GetUserByIdQueryHandler;

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
exports.UserController = void 0;
class UserController {
    constructor(userApplicationService) {
        this.userApplicationService = userApplicationService;
        this.run = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield this.userApplicationService.listAll();
                res.status(200).json({
                    success: true,
                    data: users,
                    total: users.length
                });
            }
            catch (error) {
                const errorMessage = error instanceof Error ? error.message : 'Error interno del servidor';
                res.status(500).json({
                    success: false,
                    error: errorMessage
                });
            }
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password, name } = req.body;
                const createUserDto = {
                    email, password, name
                };
                const result = yield this.userApplicationService.createUser(createUserDto);
                res.status(200).json({
                    success: true,
                    data: result,
                    message: "Usuario creado exitosamente"
                });
            }
            catch (error) {
                const errorMessage = error instanceof Error ? error.message : 'Error interno del servidor';
                res.status(500).json({
                    success: false,
                    error: errorMessage
                });
            }
        });
    }
}
exports.UserController = UserController;

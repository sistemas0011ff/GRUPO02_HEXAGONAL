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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const http_status_1 = __importDefault(require("http-status"));
/*
Principio solid: Principio de sustituci+on
const authApplicationService = new AuthApplicationService()---> tiene implementada la interfaz padre: IAuthApplicationService;
const controller = new AuthController(authApplicationService);

*/
class AuthController {
    constructor(authApplicationService) {
        this.authApplicationService = authApplicationService;
    }
    /*
    constructor(private authApplicationService: IAuthApplicationService) {}
    */
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.authApplicationService.login(req.body);
            res.status(http_status_1.default.OK).send({
                message: "Autenticación exitosa",
                token: "Token-213243242",
                expireIn: 3600
            });
        });
    }
}
exports.AuthController = AuthController;

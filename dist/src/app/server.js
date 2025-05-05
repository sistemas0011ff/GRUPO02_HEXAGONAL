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
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const index_1 = require("./di/index");
// import { registerRoutes } from './routes/indexts';
const router_1 = require("./routes/router");
class Server {
    constructor(appName, basePath, port, enviroment) {
        this.appName = appName;
        this.basePath = basePath;
        this.port = port;
        this.enviroment = enviroment;
        //http/....:qs:valor:1&&asda-----
        // {
        // valor1: 1
        // }
        this.express = (0, express_1.default)();
        this.express.use(express_1.default.urlencoded({ extended: false }));
        this.express.use(express_1.default.json());
        //Rutas... de nuestros distintos endpoint
        const router = router_1.RouterFactory.create(this.basePath, index_1.container);
        // const router = Router();
        this.express.use(this.basePath, router);
        // registerRoutes(router);
    }
    //Iniciar servidor http
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                this.httpServer = http_1.default.createServer(this.express);
                process.on('SIGTERM', () => {
                    console.log("Cerrando servidor");
                    this.stop().then(() => {
                        console.log("Servidor cerrado correctamente");
                        process.exit(0);
                    });
                });
                this.httpServer.listen(this.port, () => {
                    console.log(`Servidor ${this.appName} esta ejecutandose en http://localhost:${this.port}${this.basePath}`);
                    resolve();
                });
            });
        });
    }
    //Detener el servidor
    stop() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                if (this.httpServer) {
                    this.httpServer.close(error => {
                        console.error(`Error al cerrar el servidor: ${error === null || error === void 0 ? void 0 : error.message}`);
                        reject(error);
                    });
                }
                else {
                    console.log("Servidor cerrado correctamente");
                    resolve();
                }
            });
        });
    }
}
exports.Server = Server;

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
const app_1 = require("./app");
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log("Esta es la funcion que iniciará toda la aplicacion");
            const app = new app_1.App();
            const appName = 'mi-api';
            const basePath = '/api';
            const port = process.env.PORT || '3001';
            const enviroment = process.env.NODE_ENV || "development";
            yield app.start(appName, basePath, port, enviroment);
            process.on("SIGINT", () => __awaiter(this, void 0, void 0, function* () {
                console.log("Señal SIGINT recibida CTRL+C");
                console.log("Proceso terminado");
                process.exit(0);
            }));
        }
        catch (error) {
            console.log("Error al iniciar la aplicación", error);
            process.exit(1);
        }
    });
}
bootstrap().catch(error => {
    console.log("Error fatal:", error);
    process.exit(1);
});

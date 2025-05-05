"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
const express_1 = __importStar(require("express"));
const http_1 = __importDefault(require("http"));
// Request, Response -> HTTP express
// InconmingMessage | ServerResponse
// interface Usuario {
//     id: Number,
//     nombre: string,
//     email: string,
//     fechaCreacion: Date
// }
const port = process.env.port || 3000;
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.json({ message: "Hola....." });
});
router.get("/usuarios", (req, res) => {
    res.json({ usuario: ['usuaio 1', 'usuario 2'] });
});
router.post("/usuario", express_1.default.json(), (req, res) => {
    const { nombre, email } = req.body;
    //valdaciones
    if (!nombre || !email) {
        res.status(400).json({ error: "Se requiere el nombre o email" });
    }
    const nuevoUsuario = {
        id: Math.floor(Math.random() * 1000),
        nombre,
        email,
        fechaCreacion: new Date()
    };
    res.status(200).json({
        mensaje: "Usuario creado correctamente",
        usuario: nuevoUsuario
    });
});
//SISGTERM ---- docker | 
router.get("/simular-sigterm", (req, res) => {
    console.log("Soliitud para simular SIGTERM");
    res.json({ mensaje: "simulando señal SIGTERM" });
    setTimeout(() => {
        console.log("Ejecutando SIGTERM");
        process.emit("SIGTERM");
    });
});
process.on("SIGINT", () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Señal SIGINT recibida CTRL+C");
    console.log("Proceso terminado");
    process.exit(0);
}));
const app = (0, express_1.default)();
app.use(router);
const customRequstHandler = (req, res) => {
    console.log("Solicitud:", req.url);
    app(req, res);
};
const server = http_1.default.createServer(customRequstHandler);
server.listen(port, () => {
    console.log(`Servidor ejecutandose en http://localhost:${port}`);
});
// app.listen(port, ()=> {
//     console.log(`Servidor ejecutandose en http://localhost:${port}`)
// })

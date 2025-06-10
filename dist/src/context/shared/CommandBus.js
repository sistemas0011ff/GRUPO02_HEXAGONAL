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
exports.CommandBus = void 0;
class CommandBus {
    constructor(container) {
        this.container = container;
        this.handlers = new Map();
        const registrations = Object.keys(this.container.registrations);
        registrations.forEach(key => {
            if (key.includes('Handler') || key.includes('handler')) {
                console.log(` - ${key}`);
            }
        });
    }
    send(command) {
        return __awaiter(this, void 0, void 0, function* () {
            //Paso1: validacion del command
            yield command.validate();
            //Paso2:
            let handler = this.handlers.get(command.constructor.name);
            if (!handler) {
                // Necesito resolverlo de forma  dinámica
                const resolveHandler = this.resolveHandlerDynamically(command.constructor.name);
                if (resolveHandler) {
                    //si todo se rsolvió de forma correcta 
                    this.handlers.set(command.constructor.name, resolveHandler);
                    handler = resolveHandler;
                }
            }
            else {
                console.log(`Handler encontrado en cache para: ${command.constructor.name}`);
            }
            if (!handler) {
                console.error(`No se encontró handler para: ${command.constructor.name} `);
            }
            return handler === null || handler === void 0 ? void 0 : handler.handle(command);
        });
    }
    resolveHandlerDynamically(commandName) {
        const handlerKey = this.getHandlerKey(commandName);
        //Verificamos si el handler esta registrado dentro del contenedor de Awilix
        if (!this.container.hasRegistration(handlerKey)) {
            console.warn(`Key ${handlerKey} no esta registrado en el contenedor`);
            console.log(`Keys disponibles que contiene 'handlers'`);
            Object.keys(this.container.registrations).forEach(key => {
                if (key.toLocaleLowerCase().includes("handler") || key.toLowerCase().includes("handler")) {
                    console.log(` - ${key}`);
                }
            });
            return null;
        }
        //Obtener la instancia del handler desde el contenedor
        const handler = this.container.resolve(handlerKey);
        console.log(`Handler ${handlerKey} para comando : ${commandName}`);
        return handler;
    }
    getHandlerKey(commandName) {
        const handlerName = commandName.replace("Command", "CommandHandler");
        return handlerName.charAt(0).toLocaleLowerCase() + handlerName.slice(1);
    }
}
exports.CommandBus = CommandBus;

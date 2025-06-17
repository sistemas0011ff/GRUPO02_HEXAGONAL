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
exports.QueryBus = void 0;
class QueryBus {
    constructor(container) {
        this.container = container;
        this.handlers = new Map();
        const registrations = Object.keys(this.container.registrations);
        registrations.forEach(key => {
            if (key.includes('QueryHandler') || key.includes('queryhandler')) {
                console.log(` - QueryHandler ${key}`);
            }
        });
    }
    send(query) {
        return __awaiter(this, void 0, void 0, function* () {
            //Paso1: validacion del command
            if (query.validate) {
                yield query.validate();
            }
            //Paso2:
            let handler = this.handlers.get(query.constructor.name);
            if (!handler) {
                // Necesito resolverlo de forma  dinámica
                const resolveHandler = this.resolveHandlerDynamically(query.constructor.name);
                if (resolveHandler) {
                    //si todo se rsolvió de forma correcta 
                    this.handlers.set(query.constructor.name, resolveHandler);
                    handler = resolveHandler;
                }
            }
            else {
                console.log(`Query Handler encontrado en cache para: ${query.constructor.name}`);
            }
            if (!handler) {
                console.error(`No se encontró Query handler para: ${query.constructor.name} `);
            }
            return handler === null || handler === void 0 ? void 0 : handler.handle(query);
        });
    }
    resolveHandlerDynamically(queryName) {
        const handlerKey = this.getHandlerKey(queryName);
        //Verificamos si el handler esta registrado dentro del contenedor de Awilix
        if (!this.container.hasRegistration(handlerKey)) {
            console.warn(`Key ${handlerKey} no esta registrado en el contenedor`);
            console.log(`Keys disponibles que contiene 'handlers'`);
            Object.keys(this.container.registrations).forEach(key => {
                if (key.toLocaleLowerCase().includes("queryhandler")) {
                    console.log(` - ${key}`);
                }
            });
            return null;
        }
        //Obtener la instancia del handler desde el contenedor
        const handler = this.container.resolve(handlerKey);
        console.log(`Query Handler ${handlerKey} resuleto para query : ${queryName}`);
        return handler;
    }
    getHandlerKey(querydName) {
        const handlerName = querydName.replace("Query", "QueryHandler");
        return handlerName.charAt(0).toLocaleLowerCase() + handlerName.slice(1);
    }
}
exports.QueryBus = QueryBus;

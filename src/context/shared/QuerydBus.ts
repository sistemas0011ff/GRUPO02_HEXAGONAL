import { ICommandBus } from "./ICommandBus";
import { AwilixContainer } from "awilix";
import { IQueryBus } from "./IQueryBus";
import { IQueryResult } from "./IQueryResult";
import { IQuery } from "./IQuery";
import { IQueryHandler } from "./IQueryHandler";

export class QueryBus implements IQueryBus {

    private handlers = new Map<string, IQueryHandler<IQuery, IQueryResult>>();

    constructor(private readonly container: AwilixContainer) {
        const registrations = Object.keys(this.container.registrations);
        registrations.forEach(key => {
            if (key.includes('QueryHandler') || key.includes('queryhandler')) {
                console.log(` - QueryHandler ${key}`);
            }
        });
    }

    async send<TResult extends IQueryResult>(query: IQuery): Promise<TResult> {
        //Paso1: validacion del command
        if (query.validate) {
            await query.validate();
        }

        //Paso2:
        let handler = this.handlers.get(query.constructor.name);

        if (!handler){
            // Necesito resolverlo de forma  dinámica
            const resolveHandler = this.resolveHandlerDynamically(query.constructor.name);  
            if (resolveHandler){
                //si todo se rsolvió de forma correcta 
                this.handlers.set(query.constructor.name,resolveHandler);
                handler = resolveHandler;
            }       
        } else {
            console.log(`Query Handler encontrado en cache para: ${query.constructor.name}`);
        }

        if (!handler){
            console.error(`No se encontró Query handler para: ${query.constructor.name} `);
        }

        return handler?.handle(query) as Promise<TResult>;
        
    }

    private resolveHandlerDynamically(queryName: string) : IQueryHandler<IQuery, IQueryResult> | null {

        const handlerKey = this.getHandlerKey(queryName);
        //Verificamos si el handler esta registrado dentro del contenedor de Awilix
        if(!this.container.hasRegistration(handlerKey)){
            console.warn(`Key ${handlerKey} no esta registrado en el contenedor`);

            console.log(`Keys disponibles que contiene 'handlers'`);

            Object.keys(this.container.registrations).forEach(key => {
                if (key.toLocaleLowerCase().includes("queryhandler")){
                    console.log(` - ${key}`);        
                }
            });

            return null;
        }

        //Obtener la instancia del handler desde el contenedor
        const handler = this.container.resolve<IQueryHandler<IQuery, IQueryResult>>(handlerKey);
        console.log(`Query Handler ${handlerKey} resuleto para query : ${queryName}`);
        return handler;
    }

    private getHandlerKey(querydName: string): string {
        const handlerName = querydName.replace("Query","QueryHandler");
        return handlerName.charAt(0).toLocaleLowerCase() + handlerName.slice(1);
    }
    
}
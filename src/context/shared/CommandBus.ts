import { CreateUserCommand } from "../auth/application/commands/CreateUserCommand";
import { CreateUserCommandResult } from "../auth/application/commands/CreateUserCommandResult";
import { ICommand } from "./ICommand";
import { ICommandBus } from "./ICommandBus";
import { ICommandHandler } from "./ICommandHandler";
import { ICommandResult } from "./ICommandResult";
import { AwilixContainer } from "awilix";

export class CommandBus implements ICommandBus {

    private handlers = new Map<string, ICommandHandler<ICommand, ICommandResult>>();

    constructor(private readonly container: AwilixContainer) {
        const registrations = Object.keys(this.container.registrations);
        registrations.forEach(key => {
            if (key.includes('Handler') || key.includes('handler')) {
                console.log(` - ${key}`);
            }
        });
    }

    async send<TResult extends ICommandResult>(command: ICommand): Promise<TResult> {
        //Paso1: validacion del command
        await command.validate();
        //Paso2:
        let handler = this.handlers.get(command.constructor.name);

        if (!handler){
            // Necesito resolverlo de forma  dinámica
            const resolveHandler = this.resolveHandlerDynamically(command.constructor.name);  
            if (resolveHandler){
                //si todo se rsolvió de forma correcta 
                this.handlers.set(command.constructor.name,resolveHandler);
                handler = resolveHandler;
            }       
        } else {
            console.log(`Handler encontrado en cache para: ${command.constructor.name}`);
        }

        if (!handler){
            console.error(`No se encontró handler para: ${command.constructor.name} `);
        }

        return handler?.handle(command) as Promise<TResult>;
        
    }

    private resolveHandlerDynamically(commandName: string) : ICommandHandler<ICommand, ICommandResult> | null {

        const handlerKey = this.getHandlerKey(commandName);
        //Verificamos si el handler esta registrado dentro del contenedor de Awilix
        if(!this.container.hasRegistration(handlerKey)){
            console.warn(`Key ${handlerKey} no esta registrado en el contenedor`);

            console.log(`Keys disponibles que contiene 'handlers'`);

            Object.keys(this.container.registrations).forEach(key => {
                if (key.toLocaleLowerCase().includes("handler") || key.toLowerCase().includes("handler")){
                    console.log(` - ${key}`);        
                }
            });

            return null;
        }

        //Obtener la instancia del handler desde el contenedor
        const handler = this.container.resolve<ICommandHandler<ICommand, ICommandResult>>(handlerKey);
        console.log(`Handler ${handlerKey} para comando : ${commandName}`);
        return handler;
    }

    private getHandlerKey(commandName: string): string {
        const handlerName = commandName.replace("Command","CommandHandler");
        return handlerName.charAt(0).toLocaleLowerCase() + handlerName.slice(1);
    }
    
}
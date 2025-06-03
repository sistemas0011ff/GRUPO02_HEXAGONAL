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

    send<TResult extends ICommandResult>(command: ICommand): Promise<TResult> {
        throw new Error("Method not implemented.");
    }
    
}
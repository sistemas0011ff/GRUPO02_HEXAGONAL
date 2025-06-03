
import { ICommand } from "./ICommand";
import { ICommandResult } from "./ICommandResult";

export interface ICommandBus {
    send<TResult extends ICommandResult>(command: ICommand): Promise<TResult>;
}
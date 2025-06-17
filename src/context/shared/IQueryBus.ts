import { IQuery } from "./IQuery";
import { IQueryResult } from "./IQueryResult";


export interface IQueryBus {
    send<TResult extends IQueryResult>(query: IQuery): Promise<TResult>;
}
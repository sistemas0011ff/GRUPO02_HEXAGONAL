

import { IQuery } from "./IQuery";
import { IQueryResult } from "./IQueryResult";

export interface IQueryHandler<
    TQuery extends IQuery,
    TResult extends IQueryResult
> {
    handle(query: TQuery): Promise<TResult>;
}
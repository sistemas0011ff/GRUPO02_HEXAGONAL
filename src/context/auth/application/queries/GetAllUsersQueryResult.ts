import { IQueryResult } from "../../../shared/IQueryResult";
import { UserDto } from "../dto/user.dto";

export interface GetAllUsersQueryResult extends IQueryResult {
    users?: UserDto[];
    total?: number;
}
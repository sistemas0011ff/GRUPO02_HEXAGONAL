import { IQueryResult } from "../../../shared/IQueryResult";
import { UserDto } from "../dto/user.dto";

export interface GetUserByIdQueryResult extends IQueryResult{
    user?: UserDto
}
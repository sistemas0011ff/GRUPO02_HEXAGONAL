import { ICommandResult } from "../../../shared/ICommandResult";
import { CreateUserCommandResultDto } from "../dto/CreateUserCommandResultDto";

export interface CreateUserCommandResult extends ICommandResult {
    userId?: string;
    data?: CreateUserCommandResultDto
}
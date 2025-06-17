import { IQuery } from "../../../shared/IQuery";

export class GetUserByIdQuery implements IQuery {
    
    constructor(public readonly userId: string){}

    validate(): void {
        if(!this.userId || this.userId.trim() === '') {
            throw new Error("El Id del usuario es requerido")
        }
    }
}
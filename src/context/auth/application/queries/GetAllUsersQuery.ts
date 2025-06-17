import { IQuery } from "../../../shared/IQuery";

export class GetAllUsersQuery implements IQuery{
    constructor(
        public readonly page?: number,
        public readonly limit?: number
    ){}

    validate(): void {
        if (this.page !== undefined && this.page < 1) {
            throw new Error('La página debe ser mayor a 0')
        }

        if (this.limit !== undefined && this.limit < 1) {
            throw new Error('El límite debe ser mayor a 0')
        }

    }    

}
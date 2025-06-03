import { ICommand } from "../../../shared/ICommand";
import { CreateUserCommandDto } from "../dto/CreateUserCommandDto";

export class CreateUserCommand implements ICommand {
    constructor(
        public readonly data: CreateUserCommandDto) {}

    validate(): void {

        const errors: string[] = [];

        if (!this.data.email){
            errors.push("Email es requerido")
        }

        if (!this.data.password){
            errors.push("Password es requerido")
        }

        if (!this.data.name){
            errors.push("Name es requerido")
        }

        if (this.data.email && !this.data.email.includes('@')){
            errors.push("Email inválido")
        }

        if (errors.length > 0){
            throw new Error(errors.join(', '));
        }


    }
}
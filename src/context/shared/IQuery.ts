export interface IQuery {
    //Normalemente no neceistan validadores, como los comandos
    validate?(): Promise<void> | void
}
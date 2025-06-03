export interface ICommand {
    // Método que valida el comando antes de ejecutarse
    validate(): Promise<void> | void;
}

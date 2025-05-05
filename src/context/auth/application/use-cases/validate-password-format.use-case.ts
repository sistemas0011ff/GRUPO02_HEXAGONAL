export class ValidatePasswordFromatUseCase {
    // Reglas de validación del password
    // Mínimo 8 caracteres
    // Al menos una letra mayúscula
    // Al menos una letra minúscula
    // Al menos un número
    // Al menos un caracter especial

    excute(password: string):boolean {
        console.log("se ingreso a la validacion de password");
        if (password.length < 8) {
            return false;
        }

        const hasUpperCase = /[A-Z]/.test(password);
        const hasLoweCase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSpecialChar = /[!@#${}]/.test(password);

        return hasUpperCase && hasLoweCase && hasNumber && hasSpecialChar;

    }

}
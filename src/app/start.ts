import { App } from './app'


async function bootstrap() {
    try {
        console.log("Esta es la funcion que iniciará toda la aplicacion")
        const app = new App();
        const appName = 'mi-api';
        const basePath = '/api';
        const port = process.env.PORT || '3000';
        const enviroment = process.env.NODE_ENV || "development";

        await app.start(appName, basePath, port, enviroment);

        process.on("SIGINT", async () => {
            console.log("Señal SIGINT recibida CTRL+C");
            console.log("Proceso terminado");
            process.exit(0);
        })


    } catch (error) {
        console.log("Error al iniciar la aplicación", error);
        process.exit(1);
    }

    
}

bootstrap().catch(error => {
    console.log("Error fatal:", error);
    process.exit(1);
} );
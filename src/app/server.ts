import express, {Router} from 'express';
import http from 'http'
import { resolve } from 'path';
import { container } from './di/index';
// import { registerRoutes } from './routes/indexts';
import { RouterFactory } from './routes/router';

export class Server {
    private express: express.Express;
    private appName: string;
    private basePath: string;
    private port: string;
    private enviroment: string;
    private httpServer?: http.Server;

    constructor(appName: string, basePath: string, port: string, enviroment: string) {
        this.appName = appName;
        this.basePath = basePath;
        this.port = port;
        this.enviroment = enviroment;
        
        //http/....:qs:valor:1&&asda-----
        // {
        // valor1: 1
        // }
        this.express = express();
        this.express.use(express.urlencoded({extended:false}))
        this.express.use(express.json())
        
        //Rutas... de nuestros distintos endpoint
        const router = RouterFactory.create(this.basePath, container);
        // const router = Router();
        this.express.use(this.basePath, router);
        // registerRoutes(router);
        
    }

    //Iniciar servidor http
    async listen(): Promise<void>{
        return new Promise(resolve => {
            this.httpServer = http.createServer(this.express);

            process.on('SIGTERM', () => {
                console.log("Cerrando servidor");
                this.stop().then(() => {
                    console.log("Servidor cerrado correctamente");
                    process.exit(0);
                });
            });    

            this.httpServer.listen(this.port, () => {
                console.log(`Servidor ${this.appName} esta ejecutandose en http://localhost:${this.port}:${this.basePath}`)
                resolve();
            })            
        });
    }

    //Detener el servidor
    async stop(): Promise<void>{
        return new Promise((resolve, reject)=> {
            if (this.httpServer){
                this.httpServer.close(error => {
                    console.error(`Error al cerrar el servidor: ${ error?.message}`);
                    reject(error);
                });
            }else {
                console.log("Servidor cerrado correctamente");
                resolve();
            }
        })
    }
}
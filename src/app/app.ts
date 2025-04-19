import { Server } from './server'


export class App {
    server?: Server;

    async start(appName: string, basePath: string, port: string, enviroment: string){
        this.server = new Server(appName, basePath, port, enviroment);
        return await this.server.listen();
    }

    async stop(){
        return await this.server?.stop();
    }

}
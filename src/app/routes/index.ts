import { Router } from "express";
import * as fs from 'fs';
import * as path from 'path';

export function registerRoutes(router :Router) : void{
    const reuterFiles = fs.readdirSync(__dirname)
      .filter(file => file.endsWith('.route.ts') || file.endsWith('.route.js'))
      .filter(file => file !== 'index.ts' && 'index.js');

    //Registrando cada una de las rutas
    for(const file of reuterFiles){
        //importar el archivo de ruta correspondiente
        const routerPath = path.join(__dirname, file);
        const route = require(routerPath);
        route.register(router);
    }
}
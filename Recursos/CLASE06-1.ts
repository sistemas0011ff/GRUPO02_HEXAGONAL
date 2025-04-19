-- creacion de carpeta
mkdir pryecto-hexagonal

-- accedemos a la carpeta
cd pryecto-hexagonal

-- creando el packagejson con valores por defecto
--  Es un archivo de configuración en formato JSON que contiene metadata e información importante sobre tu proyecto.
npm init -y

# Instala express
npm install express


//<=================================================================================================================
// PARTE 1
//==================================================================================================================>
const express = require('express');
const util = require('util');

const app = express();
const port = process.env.PORT || 3000;

//MIDDWLARE PARA PARSEAR A JSON
app.use(express.json());

//rutas
app.get("/", (req, res) => {
    res.json({message: 'Bienvenido a la API'});
});


app.get("/usuarios",(req, res)=>{
    res.json({usuarios: ['usuario1','usuario2']});
});

app.post("/usuarios",(req, res) => {
    console.log("Body:", JSON.stringify(req.body, null, 2));
    console.log("Query:", JSON.stringify(req.query, null, 2));
    console.log("Params:", JSON.stringify(req.params, null, 2));
    console.log("Headers:", JSON.stringify(req.headers, null, 2));
    console.log("URL:", req.url);
    console.log("Method:", req.method);
    console.log("Request Object:", util.inspect(req, {depth: 2, colors: true}));

    //deestructuracion:
    const {nombre, email} = req.body;

    //validar que se proporcionen datos
    if(!nombre || !email){
        return res.status(400).json({error: 'Se requiere nombre y email'});
    }

    //simular una respusta
    const nuevoUsuario = {
        id: Math.floor(Math.random()*1000),
        nombre,
        email,
        fechaCreacion: new Date()
    };

    res.status(201).json({
        mensaje: 'Usuario creado exitosamente',
        usuario: nuevoUsuario
    });



});

//Middwlare para manejar ruta no encontradas
app.use((req, res) => {
    res.status(404).json({error: 'Ruta no encontrada'});
});

//Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor ejecutandose en http://localhost:${port}`);
})


//<=================================================================================================================
// PARTE 2 - TypeScript
// 1. Se usa import en lugar de require para la sintaxis de importación ES6
// 2. Se añaden anotaciones de tipos a los parámetros de las funciones
//     javascript: app.get("/", (req, res) => { ... });
//	   typescript: app.get("/", (_req: Request, res: Response) => { ... });
// Importante
//	   solo para desarrollo para verificacion de tipos	 
//	   npm install typescript --save-dev
//	   npm install -g typescript
//	   TypeScript necesita definiciones de tipos para las bibliotecas que estás usando. 
//	   npm install --save-dev @types/express @types/node
			Esto instalará:
			@types/express: Las definiciones de tipos para Express
			@types/node: Las definiciones de tipos para Node.js (incluyendo process y otras variables globales)
	   
	   Estas definiciones de tipos generalmente se instalan como paquetes 
	   separados con el prefijo @types/, siguiendo la convención:
	   Por ejemplo:
			Para Express: @types/express
			Para Node.js: @types/node
			Para MongoDB: @types/mongodb
			Para Redis: @types/redis
	   Algunas bibliotecas más modernas ya incluyen sus propias definiciones de tipos dentro del paquete principal (tienen soporte nativo para TypeScript), por lo que no necesitas instalar un paquete @types/ adicional para ellas. Ejemplos incluyen Prisma, Axios y muchas bibliotecas más reciente
	   
//	   Para crear un archivo tsconfig.json puedes usar "tsc --init"
//	   npx tsc --init 

	   ejecutando 
	   tsc = traspilar
	   node dist/server.js

	      
// Lectura

//	   de forma abreviada
//	   npm install -D typescript
//	   Dependencias de producción: npm install typescript --save | * Se guardan en dependencies en el package.json | Este es el comportamiento predeterminado en npm moderno (ya no es necesario especificar --save
//     Dependencias globales: npm install typescript -g | Esto instalará TypeScript globalmente en tu sistema, permitiéndote usar el comando tsc desde cualquier ubicación sin necesidad de instalarlo en cada proyecto.
//	   Dependencias opcionales: npm install typescript --save-optional | Esto añadirá TypeScript a la sección optionalDependencies en tu package.json, indicando que tu aplicación puede funcionar incluso si TypeScript no está disponible.
//	   Dependencias exactas: Son paquetes necesarios para que la aplicación funcione en producción. 
//					         Se especifican con versiones exactas para garantizar consistencia. 
//							 En package.json aparecen en la sección "dependencies".
//	   Dependencias de desarrollo exactas (combinando flags):
//	   Dependencias peer: En las versiones más recientes de npm (a partir de npm 7, lanzado en 2020), el comportamiento de peerDependencies cambió significativamente
//==================================================================================================================>

// const express = require('express');
// const util = require('util');

import express, {Request, Response, NextFunction} from 'express';

const app = express();
const port = process.env.PORT || 3000;

//Definicion de interfaces
interface Usuario {
    id: number,
    nombre: string,
    email: string,
    fechaCreacion: Date
};

interface NuevoUsuarioRequest {
    nombre: string,
    email: string
}


//MIDDWLARE PARA PARSEAR A JSON
app.use(express.json());

//rutas
//app.get("/", (req, res) => {
app.get("/", (_req: Request, res: Response) => {
    res.json({message: 'Bienvenido a la API'});
});


//app.get("/usuarios",(req, res)=>{

app.get("/usuarios",(_req: Request, res: Response) =>{
    res.json({usuarios: ['usuario1','usuario2']});
});

app.post("/usuarios",((req: Request, res: Response)  => {
    

    //deestructuracion:
    const {nombre, email} = req.body as NuevoUsuarioRequest;

    //validar que se proporcionen datos
    if(!nombre || !email){
        return res.status(400).json({error: 'Se requiere nombre y email'});
    }

    //simular una respusta
    const nuevoUsuario: Usuario = {
        id: Math.floor(Math.random()*1000),
        nombre,
        email,
        fechaCreacion: new Date()
    };

    res.status(201).json({
        mensaje: 'Usuario creado exitosamente',
        usuario: nuevoUsuario
    });



}) as express.RequestHandler);

//Middwlare para manejar ruta no encontradas
app.use( (_req: Request, res: Response)  => {
    res.status(404).json({error: 'Ruta no encontrada'});
});

//Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor ejecutandose en http://localhost:${port}`);
})

//<=================================================================================================================
// PARTE 3 - entendiendo desacoplamiento http:
//==================================================================================================================>
import express, {Request, Response, NextFunction} from 'express';
import http, { IncomingMessage, ServerResponse } from 'http';
import { parse } from 'url';

const app = express();
app.use(express.json());
 
//Definicion de interfaces
interface Usuario {
    id: number,
    nombre: string,
    email: string,
    fechaCreacion: Date
};

interface NuevoUsuarioRequest {
    nombre: string,
    email: string
}
 

app.post("/usuarios",((req: Request, res: Response)  => {
    

    //deestructuracion:
    const {nombre, email} = req.body as NuevoUsuarioRequest;

    //validar que se proporcionen datos
    if(!nombre || !email){
        return res.status(400).json({error: 'Se requiere nombre y email'});
    }

    //simular una respusta
    const nuevoUsuario: Usuario = {
        id: Math.floor(Math.random()*1000),
        nombre,
        email,
        fechaCreacion: new Date()
    };

    res.status(201).json({
        mensaje: 'Usuario creado exitosamente',
        usuario: nuevoUsuario
    });



}) as express.RequestHandler);

//validando firmas

const getHolaMundo = (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ mensaje: '¡Hola mundo!' }));
  };
  

const port = process.env.PORT || 3000;
//Desacomplamos la creacion del serivodr http
//const server = http.createServer(app);

// Función principal que maneja todas las solicitudes
const requestListener = (req: IncomingMessage, res: ServerResponse) => {
    const method = req.method?.toUpperCase();        
    const { pathname, query } = parse(req.url || '', true);
 
    // Enrutamiento básico
    if (method === 'GET' && pathname === '/hola') {
      getHolaMundo(req, res);
    }else {
        // Para cualquier otra ruta, delegar a Express
        app(req, res);
    }
};

const server = http.createServer(requestListener);

//Middwlare para manejar ruta no encontradas
app.use( (_req: Request, res: Response)  => {
    res.status(404).json({error: 'Ruta no encontrada'});
});

//Iniciar el servidor
/*
app.listen(port, () => {
    console.log(`Servidor ejecutandose en http://localhost:${port}`);
});
*/
server.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});





//<=================================================================================================================
// PARTE 4 - rutas
//==================================================================================================================>

import express, { Request, Response } from 'express';
import http from 'http';

// Crear aplicación Express
const app = express();
app.use(express.json());

// Crear un router - esto permite organizar mejor las rutas
const router = express.Router();

// Definir rutas en el router
// Ventaja: puedes agrupar rutas relacionadas
router.get('/', (req: Request, res: Response) => {
  res.json({ mensaje: 'Bienvenido a la API' });
});

// Rutas relacionadas con usuarios agrupadas
router.get('/usuarios', (req: Request, res: Response) => {
  // Ventaja: facilita la organización de código por dominio
  res.json({ usuarios: ['Usuario1', 'Usuario2', 'Usuario3'] });
});

router.post('/usuarios', (req: Request, res: Response) => {
  // Ventaja: mejor manejo de tipos en TypeScript
  const nuevoUsuario = req.body;
  res.status(201).json({ 
    mensaje: 'Usuario creado correctamente', 
    usuario: nuevoUsuario 
  });
});

// Montar el router en la aplicación
// Ventaja: puedes definir prefijos de rutas
app.use('/api', router); // Todas las rutas tendrán el prefijo /api

// Crear servidor HTTP desacoplado de Express
const server = http.createServer(app);

// Iniciar servidor
const puerto = 3000;
server.listen(puerto, () => {
  console.log(`Servidor ejecutándose en http://localhost:${puerto}`);
  console.log('Rutas disponibles:');
  console.log('  GET    /api/');
  console.log('  GET    /api/usuarios');
  console.log('  POST   /api/usuarios');
});


/// agregando cierre
// httpApp.ts - Archivo que combina Express con HTTP desacoplado
import express, { Request, Response } from 'express';
import http from 'http';

// Crear aplicación Express
const app = express();
app.use(express.json());

// Crear un router - esto permite organizar mejor las rutas
const router = express.Router();

// Definir rutas en el router
// Ventaja: puedes agrupar rutas relacionadas
router.get('/', (req: Request, res: Response) => {
  res.json({ mensaje: 'Bienvenido a la API' });
});

// Rutas relacionadas con usuarios agrupadas
router.get('/usuarios', (req: Request, res: Response) => {
  // Ventaja: facilita la organización de código por dominio
  res.json({ usuarios: ['Usuario1', 'Usuario2', 'Usuario3'] });
});

router.post('/usuarios', (req: Request, res: Response) => {
  // Ventaja: mejor manejo de tipos en TypeScript
  const nuevoUsuario = req.body;
  res.status(201).json({ 
    mensaje: 'Usuario creado correctamente', 
    usuario: nuevoUsuario 
  });
});

// Montar el router en la aplicación
// Ventaja: puedes definir prefijos de rutas
app.use('/api', router); // Todas las rutas tendrán el prefijo /api

// DESACOPLAMIENTO: Crear servidor HTTP separado de Express
// Ventajas:
// 1. Separación clara entre el servidor HTTP y la aplicación Express
// 2. Permite añadir otros protocolos al mismo servidor (como WebSockets)
// 3. Más control sobre el ciclo de vida del servidor
const server = http.createServer(app);

// Iniciar servidor
const puerto = 3000;
server.listen(puerto, () => {
  console.log(`Servidor ejecutándose en http://localhost:${puerto}`);
  console.log('Rutas disponibles:');
  console.log('  GET    /api/');
  console.log('  GET    /api/usuarios');
  console.log('  POST   /api/usuarios');
});

// Manejo de señales para cierre ordenado
process.on('SIGTERM', () => {
  console.log('Cerrando servidor...');
  server.close(() => {
    console.log('Servidor cerrado correctamente');
    process.exit(0);
  });
});

process.on('SIGTERM', ...) es muy útil por varias razones importantes:

Cierre controlado del servidor: Permite que tu aplicación reaccione apropiadamente cuando se le pide terminar, cerrando las conexiones y recursos de forma ordenada.
Entornos de producción: Es esencial cuando tu aplicación se ejecuta en:

Contenedores Docker (donde docker stop envía SIGTERM)
Kubernetes (durante actualizaciones o escalados)
PM2 u otros gestores de procesos
Sistemas CI/CD que despliegan nuevas versiones


Completar operaciones pendientes: Las conexiones activas pueden terminar normalmente sin interrumpirse bruscamente.
Prevención de pérdida de datos: Operaciones en curso (como escrituras a base de datos) pueden completarse antes del cierre.
Liberación de recursos: Puedes cerrar conexiones a bases de datos, caches, o servicios externos adecuadamente.

Sin este manejador, cuando tu aplicación reciba una señal SIGTERM (por ejemplo, durante un despliegue), se cerraría abruptamente, posiblemente:

Interrumpiendo respuestas HTTP a medio enviar
Dejando conexiones a bases de datos abiertas
No completando transacciones en curso

// httpApp.ts - Archivo que combina Express con HTTP desacoplado
import express, { Request, Response } from 'express';
import http from 'http';

// Crear aplicación Express
const app = express();
app.use(express.json());

// Crear un router - esto permite organizar mejor las rutas
const router = express.Router();

// Definir rutas en el router
// Ventaja: puedes agrupar rutas relacionadas
router.get('/', (req: Request, res: Response) => {
  res.json({ mensaje: 'Bienvenido a la API' });
});

// Rutas relacionadas con usuarios agrupadas
router.get('/usuarios', (req: Request, res: Response) => {
  // Ventaja: facilita la organización de código por dominio
  res.json({ usuarios: ['Usuario1', 'Usuario2', 'Usuario3'] });
});

router.post('/usuarios', (req: Request, res: Response) => {
  // Ventaja: mejor manejo de tipos en TypeScript
  const nuevoUsuario = req.body;
  res.status(201).json({ 
    mensaje: 'Usuario creado correctamente', 
    usuario: nuevoUsuario 
  });
});

// Ruta para simular SIGTERM
router.get('/simular-sigterm', (req: Request, res: Response) => {
    console.log('Recibida solicitud para simular SIGTERM');
    res.json({ mensaje: 'Simulando SIGTERM...' });
    
    // Dar tiempo para que la respuesta se envíe
    setTimeout(() => {
      console.log('Emitiendo señal SIGTERM manualmente');
      process.emit('SIGTERM');
    }, 100);
  });

// Montar el router en la aplicación
// Ventaja: puedes definir prefijos de rutas
app.use('/api', router); // Todas las rutas tendrán el prefijo /api

// DESACOPLAMIENTO: Crear servidor HTTP separado de Express
// Ventajas:
// 1. Separación clara entre el servidor HTTP y la aplicación Express
// 2. Permite añadir otros protocolos al mismo servidor (como WebSockets)
// 3. Más control sobre el ciclo de vida del servidor
const server = http.createServer(app);

// Iniciar servidor
const puerto = 3000;
server.listen(puerto, () => {
  console.log(`Servidor ejecutándose en http://localhost:${puerto}`);
  console.log('Rutas disponibles:');
  console.log('  GET    /api/');
  console.log('  GET    /api/usuarios');
  console.log('  POST   /api/usuarios');
});

// Manejo de señales para cierre ordenado
process.on('SIGTERM', () => {
  console.log('Cerrando servidor...');
  server.close(() => {
    console.log('Servidor cerrado correctamente');
    process.exit(0);
  });
});


//<=================================================================================================================
// PARTE 5 - desacomplando seever
//==================================================================================================================>

// server.ts
import http from 'http';
import express, { Express } from 'express';

export class Server {
  private httpServer?: http.Server;
  private express: Express;
  private port: number;

  constructor(express: Express, port: number) {
    this.express = express;
    this.port = port;
  }

  async listen(): Promise<void> {
    return new Promise(resolve => {
      this.httpServer = http.createServer(this.express);
      
      //process.on('SIGTERM', () => { ... }) NO ejecuta el código dentro del callback de inmediato
      process.on('SIGTERM', () => {
        console.log('Cerrando servidor...');
        this.stop().then(() => {
          console.log('Servidor cerrado correctamente');
          process.exit(0);
        });
      });

      this.httpServer.listen(this.port, () => {
        console.log(`Servidor ejecutándose en http://localhost:${this.port}`);
        resolve();
      });
    });
  }

  getHTTPServer(): http.Server | undefined {
    return this.httpServer;
  }

  async stop(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.httpServer) {
        this.httpServer.close(error => {
          if (error) {
            reject(error);
          } else {
            resolve();
          }
        });
      } else {
        resolve();
      }
    });
  }
}

// clase02.ts
import express, { Request, Response } from 'express';
import { Server } from './server';

// Crear y configurar Express
const app = express();
app.use(express.json());

// Crear un router
const router = express.Router();

// Definir rutas en el router
router.get('/', (req: Request, res: Response) => {
  res.json({ mensaje: 'Bienvenido a la API' });
});

// Rutas relacionadas con usuarios agrupadas
router.get('/usuarios', (req: Request, res: Response) => {
  // Ventaja: facilita la organización de código por dominio
  res.json({ usuarios: ['Usuario1', 'Usuario2', 'Usuario3'] });
});

router.post('/usuarios', (req: Request, res: Response) => {
  // Ventaja: mejor manejo de tipos en TypeScript
  const nuevoUsuario = req.body;
  res.status(201).json({ 
    mensaje: 'Usuario creado correctamente', 
    usuario: nuevoUsuario 
  });
});

// Ruta para simular SIGTERM
router.get('/simular-sigterm', (req: Request, res: Response) => {
  console.log('Recibida solicitud para simular SIGTERM');
  res.json({ mensaje: 'Simulando SIGTERM...' });
  
  // Dar tiempo para que la respuesta se envíe
  setTimeout(() => {
    console.log('Emitiendo señal SIGTERM manualmente');
    process.emit('SIGTERM');
  }, 100);
});

// Montar el router en la aplicación
app.use('/api', router);

// Configurar y iniciar el servidor
const puerto = 3000;
const server = new Server(app, puerto);

// Iniciar servidor
server.listen().then(() => {
  console.log('Rutas disponibles:');
  console.log('  GET    /api/');
  console.log('  GET    /api/usuarios');
  console.log('  POST   /api/usuarios');
  console.log('  GET    /api/simular-sigterm');
});

 
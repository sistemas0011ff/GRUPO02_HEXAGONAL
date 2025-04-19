-- creacion de carpeta
mkdir pryecto-hexagonal

-- accedemos a la carpeta
cd pryecto-hexagonal

-- creando el packagejson con valores por defecto
--  Es un archivo de configuración en formato JSON que contiene metadata e información importante sobre tu proyecto.
npm init -y

# Instala express
npm install express


-- para trabajar ocn typescript
npm install typescript --save-dev
npm install --save-dev @types/node

//	   TypeScript necesita definiciones de tipos para las bibliotecas que estás usando. 
//	   npm install --save-dev @types/express @types/node

npx tsc --init
	   ejecutando 
	   tsc = traspilar
	   node dist/server.js
	   
	  {
	  "compilerOptions": {
		// Especifica la versión de JavaScript a la que se compilará el código (ES2016 tiene buen soporte en Node.js)
		"target": "es2016",
		
		// Define el sistema de módulos para el código generado (CommonJS es el estándar en Node.js)
		"module": "commonjs",
		
		// Carpeta donde se guardarán los archivos JS compilados
		"outDir": "./dist",
		
		// Carpeta donde están los archivos fuente de TypeScript
		//"rootDir": "./src",
		"rootDir": "./",
		
		// Activa todas las comprobaciones estrictas de tipo (null, undefined, any implícito, etc.)
		// o permitirá usar variables que puedan ser null o undefined sin comprobaciones explícitas.
		// se usa para proyectos grandes
		"strict": true,
		
		// Facilita la importación de módulos CommonJS en código ES modules (import en lugar de require)
		"esModuleInterop": true,
		
		// Omite la verificación de tipos en archivos de declaración (.d.ts) para mejorar el rendimiento
		"skipLibCheck": true,
		
		// Garantiza consistencia en mayúsculas/minúsculas en las importaciones (importante en sistemas Unix)
		"forceConsistentCasingInFileNames": true
	  },
	  
	  // Patrones de archivos que se incluirán en la compilación (todos los archivos dentro de src)
	  // "include": ["src/**/*"],
	  "include": ["./*.ts", "./*.js"],

	  // Patrones de archivos que se excluirán (node_modules contiene código de terceros ya compilado)
	  "exclude": ["node_modules"]
	 }

Nota
Exportación por defecto (default export):
	archivo: miModulo.js
	const miObjeto = { ... };
	export default miObjeto;

Importando una exportación por defecto:
	import cualquierNombre from 'miModulo';
	'cualquierNombre' puede ser cualquier identificador que elijas

Exportación nombrada (named export):
	archivo: miModulo.js
	export const funcionA = () => { ... };
	export const funcionB = () => { ... };
	
Importando exportaciones nombradas:
	import { funcionA, funcionB } from 'miModulo';
	// Los nombres deben coincidir con los exportados
	
Importando ambos tipos:
	import modulo, { funcionA, funcionB } from 'miModulo';
	// 'modulo' es la exportación por defecto
	// 'funcionA' y 'funcionB' son exportaciones nombradas
	
------------------------------------------------------------------------------

IncomingMessage y ServerResponse:

Son interfaces del módulo HTTP nativo de Node.js
Representan las solicitudes y respuestas HTTP a nivel más básico
Se encuentran en el módulo http de Node.js


Request y Response de Express:

Son extensiones/mejoras de las interfaces nativas de Node.js
Express envuelve (wraps) estas interfaces básicas y les añade funcionalidades adicionales
Por eso Express amplía estas interfaces con métodos más convenientes como req.body, res.json(), etc.

------------------------------------------------------------------------------
Node.js HTTP nativo: http nativo de Node.js, trabaja directamente con IncomingMessage 
(para solicitudes) y ServerResponse 

Express crea sus propios objetos Request y Response que extienden los objetos nativos de Node.js:
// Internamente, Express hace algo como:
class Request extends IncomingMessage {
  // Métodos y propiedades adicionales...
}

class Response extends ServerResponse {
  // Métodos y propiedades adicionales...
}

------------------------------------------------------------------------------

import express, {Request, Response} from 'express';
import http, {IncomingMessage, ServerResponse} from 'http';
import {parse} from 'url';

interface Usuario {
    id: number,
    nombre: string,
    email: string,
    fechaCreacion: Date
};

interface NuevoUsuario {
    nombre: string,
    email: string
};

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.json({message:"Bienvenido a la API"});
});

app.get("/usurios", (req: Request, res: Response) => {
    res.json({usuario: ['Usuario1', 'Usuario2']})    
});

app.post("/usuario", (req: Request, res: Response) => {
    const {nombre, email} = req.body;

    //Validacion de entrada
    if (!nombre || !email) {
        res.status(400).json({error: 'Se requiere nombre o Email'});
    }

    const nuevoUsurio = {
        id: Math.floor(Math.random()*1000),
        nombre,
        email,
        fechaCreacion: new Date()
    }

    res.status(200).json({
        mensaje: "Usuario creado existosamente",
        usuario: nuevoUsurio
    });

});


const getHolaMundo = (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, {'Content-Type':'application/json'});
    res.end(JSON.stringify({message:'Hola mundo'}));
};

const notFoundHandler = (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(404, {'Content-Type':'application/json'});
    res.end(JSON.stringify({
        error: 'Ruta no encontrada',
        path: req.url
    }));
}


// simulando un manejo de solicitudes
const requestListener = (req: IncomingMessage, res: ServerResponse) => {
    const method = req.method?.toUpperCase();
    const {pathname, query} = parse(req.url ||'', true);

    if (method === "GET" && pathname === "/hola") {
        getHolaMundo(req, res);
    } else {
        notFoundHandler(req, res);
    }
}



const server = http.createServer(requestListener);

server.listen(port, () => {
    console.log(`Servidor ejecutandose en http://localhost:${port}`)
});

/*
app.listen(port, () => {
    console.log(`Servidor ejecutandose en http://localhost:${port}`)
});
*/

------------------------------------------------------------------------------

parte slo http

------------------------------------------------------------------------------
import express, {Request, Response} from 'express';
import http, {IncomingMessage, ServerResponse} from 'http';
import {parse} from 'url';

interface Usuario {
    id: number,
    nombre: string,
    email: string,
    fechaCreacion: Date
};

interface NuevoUsuario {
    nombre: string,
    email: string
};

//const app = express();
const port = process.env.PORT || 3000;
/*
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.json({message:"Bienvenido a la API"});
});

app.get("/usurios", (req: Request, res: Response) => {
    res.json({usuario: ['Usuario1', 'Usuario2']})    
});

app.post("/usuario", (req: Request, res: Response) => {
    const {nombre, email} = req.body;

    //Validacion de entrada
    if (!nombre || !email) {
        res.status(400).json({error: 'Se requiere nombre o Email'});
    }

    const nuevoUsurio = {
        id: Math.floor(Math.random()*1000),
        nombre,
        email,
        fechaCreacion: new Date()
    }

    res.status(200).json({
        mensaje: "Usuario creado existosamente",
        usuario: nuevoUsurio
    });

});
*/

const getHolaMundo = (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, {'Content-Type':'application/json'});
    res.end(JSON.stringify({message:'Hola mundo'}));
};

const notFoundHandler = (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(404, {'Content-Type':'application/json'});
    res.end(JSON.stringify({
        error: 'Ruta no encontrada',
        path: req.url
    }));
}


// simulando un manejo de solicitudes
const requestListener = (req: IncomingMessage, res: ServerResponse) => {
    const method = req.method?.toUpperCase();
    const {pathname, query} = parse(req.url ||'', true);

    if (method === "GET" && pathname === "/hola") {
        getHolaMundo(req, res);
    } else {
        notFoundHandler(req, res);
    }
}



const server = http.createServer(requestListener);

server.listen(port, () => {
    console.log(`Servidor ejecutandose en http://localhost:${port}`)
});

/*
app.listen(port, () => {
    console.log(`Servidor ejecutandose en http://localhost:${port}`)
});
*/

------------------------------------------------------------------
ROUTER: 
Características principales del Router:

Modularidad: Te permite organizar tus rutas en diferentes archivos o módulos
Aislamiento: Cada Router puede tener su propio middleware específico
Montable: Puedes montar un Router en una ruta específica de tu aplicación principal
-------------------------------------------------------------------

import express, { Router,Request, Response} from 'express';
import http, {IncomingMessage, ServerResponse} from 'http';
import {parse} from 'url';

interface Usuario {
    id: number,
    nombre: string,
    email: string,
    fechaCreacion: Date
};

interface NuevoUsuario {
    nombre: string,
    email: string
};



//const app = express();
const port = process.env.PORT || 3000;

const router = Router();



// app.use(express.json());

router.get("/", (req: Request, res: Response) => {
    res.json({message:"Bienvenido a la API"});
});

router.get("/usurios", (req: Request, res: Response) => {
    res.json({usuario: ['Usuario1', 'Usuario2']})    
});

router.post("/usuario", express.json() ,(req: Request, res: Response) => {
    const {nombre, email} = req.body;

    //Validacion de entrada
    if (!nombre || !email) {
        res.status(400).json({error: 'Se requiere nombre o Email'});
    }

    const nuevoUsurio = {
        id: Math.floor(Math.random()*1000),
        nombre,
        email,
        fechaCreacion: new Date()
    }

    res.status(200).json({
        mensaje: "Usuario creado existosamente",
        usuario: nuevoUsurio
    });

}); 


const app = express();
app.use(router);

console.log('¿app es una función?', typeof app === 'function'); // Debería imprimir: true

// Crear una función request handler personalizada para demostrar
const customRequestHandler = (req: IncomingMessage, res: ServerResponse) => {
    console.log('Solicitud recibida:', req.url);
    // Pasar el control a Express (app)
    app(req, res);
};


const server = http.createServer(/*app*/customRequestHandler);

server.listen(port, () => {
    console.log(`Servidor ejecutandose en http://localhost:${port}`)
});

/*
app.listen(port, () => {
    console.log(`Servidor ejecutandose en http://localhost:${port}`)
});
*/

-----------------------------------------------------------------
sigterm 
-----------------------------------------------------------------
import express, { Router,Request, Response} from 'express';
import http, {IncomingMessage, ServerResponse} from 'http';
import {parse} from 'url';

interface Usuario {
    id: number,
    nombre: string,
    email: string,
    fechaCreacion: Date
};

interface NuevoUsuario {
    nombre: string,
    email: string
};



//const app = express();
const port = process.env.PORT || 3000;

const router = Router();



// app.use(express.json());

router.get("/", (req: Request, res: Response) => {
    res.json({message:"Bienvenido a la API"});
});

router.get("/usurios", (req: Request, res: Response) => {
    res.json({usuario: ['Usuario1', 'Usuario2']})    
});

router.post("/usuario", express.json() ,(req: Request, res: Response) => {
    const {nombre, email} = req.body;

    //Validacion de entrada
    if (!nombre || !email) {
        res.status(400).json({error: 'Se requiere nombre o Email'});
    }

    const nuevoUsurio = {
        id: Math.floor(Math.random()*1000),
        nombre,
        email,
        fechaCreacion: new Date()
    }

    res.status(200).json({
        mensaje: "Usuario creado existosamente",
        usuario: nuevoUsurio
    });

}); 


router.get("/simular-sigterm", (req: Request, res: Response) => {
    console.log("Solicitud para simular SIgTERM");
    res.json({mensaje:"Simulando SIGTERM"});

    setTimeout(() => {
        console.log("Emitiendo señal SIGTERM");
        process.emit("SIGTERM");
    });

})

const app = express();
app.use(router);

console.log('¿app es una función?', typeof app === 'function'); // Debería imprimir: true

// Crear una función request handler personalizada para demostrar
const customRequestHandler = (req: IncomingMessage, res: ServerResponse) => {
    console.log('Solicitud recibida:', req.url);
    // Pasar el control a Express (app)
    app(req, res);
};


const server = http.createServer(/*app*/customRequestHandler);



// Configurar el manejador de SIGTERM fuera del método listen
process.on('SIGTERM', async () => {
    console.log('Señal SIGTERM recibida');
    // await stopServer();
    console.log('Proceso terminando...');
    process.exit(0);
});

// Opcional: también manejar SIGINT (Ctrl+C)
process.on('SIGINT', async () => {
    console.log('Señal SIGINT recibida (Ctrl+C)');
    // await stopServer();
    console.log('Proceso terminando...');
    process.exit(0);
});

server.listen(port, () => {
    console.log(`Servidor ejecutandose en http://localhost:${port}`)
});

/*
app.listen(port, () => {
    console.log(`Servidor ejecutandose en http://localhost:${port}`)
});
*/



-----------------------------------------------------------------
sctructurando
  // "include": ["src/**/*"],
  "include": [
    "src/**/*"
  ],


-----------------------------------------------------------------


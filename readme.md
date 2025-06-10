
# 🔶 Arquitectura Hexagonal y Domain-Driven Design Avanzado 🔶


## Instructores
- **Ingeniero de Software**: Especialista en patrones de arquitectura y desarrollo de software (Eduardo F. G.)
- **Ingeniero Cloud**: Experto en implementaciones y soluciones en AWS (J. Manuel Fajardo Gutierrez)

## Clase 01
Grabacion: https://drive.google.com/file/d/1H36C63m417buP4GjMQJ6yA1hzNvgeVbI/view?usp=sharing

### **Instalacion de Git | Instalacion de Docker**
- Instalacion de Git
- Instalacion de Docker

### **Introduccion a AWS - Parte 1** 
- Historia
- Conciendo el ecosistema de AWS
- Pesentacion de los multiples servicios
- Preguntas y Respuestas
- Tutorial base para creacion de cuenta AWS: https://www.youtube.com/watch?v=CLoaGGWJT80&ab_channel=TutoVip

## Clase 02
Grabacion: https://drive.google.com/file/d/1MnSsTqLReLHzERF0xTzP_e_l9BdApDYu/view?usp=sharing

### **Introduccion a AWS - Parte 2** Prueba de despliegue
- Introduccion a servicios de desarrollo ECR
- Introduccion a servicio de ECS
- Preguntas y Respuestas

### **Creacion de WebSimple | Dockerizacion | Despliegue y configuracion en ECS**
- Creacion de web simple
- Creacion de archivo Dockerfile
- Instalacion de CLI de AWS
- Subida del servicio dockerizado a AWS ECR
- Despliegue de Web en AWS ECS    
- Recurso: CLASE02_INSTALACION_DOCKERIZACION

## Clase 03
### **Herramientas e instadores**
Grabacion: https://drive.google.com/file/d/11yZzuD8dEBhR74kk8Utyv3Dbx8NhMoV9/view

-- [Herramientas e Instaladores](Recursos/CLASE03-herramientas-instaladores.md)
-- [Emulador de entorno TypeScript](https://www.typescriptlang.org/play/)
-- [Codigo base 01](Recursos/CLASE03-TS_BASE_01.ts)

#### Conceptos Basicos de TypeScript
##### Strings en TypeScript
* Declaracion de variables string
* Concatenacion de strings
* Metodos comunes (length, toUpperCase, includes, substring)

##### Numbers en TypeScript
* Enteros (positivos, negativos, cero)
* Numeros decimales (punto flotante)
* Notacion cientifica
* Sistemas numericos (binario, octal)
* Operaciones aritmeticas basicas (suma, division, modulo)
* Conversiones (String a Number, parseInt)
* Separador numerico con guion bajo para legibilidad

##### Symbol
* Creacion de simbolos
* Comparacion de simbolos (demuestra que son unicos)

##### Arrays
* Arrays de strings (dos sintaxis: string[] y Array<string>)
* Arrays de numeros
* Modificacion de elementos en arrays

##### Objetos
* Objetos genericos
* Objetos con tipos especificos
* Objetos anidados

##### Tuplas
* Definicion de tuplas con tipos especificos
* Modificacion de tuplas con push

##### Any
* Uso del tipo any para variables de tipo flexible

##### Types personalizados
* Definicion de types
* Combinacion de types con el operador & (interseccion)
* Uso de operadores de union (|) con types

##### Funciones
* Funciones con parametros tipados
* Callbacks tipados
* Implementacion y uso de funciones

## Clase 04
Grabacion: https://drive.google.com/file/d/1dVgSwwyCyiVYTbpkU5us8XCdZbgvx2YE/view?usp=sharing

-- [Emulador de entorno TypeScript](https://www.typescriptlang.org/play/)
-- [Codigo base 02](Recursos/CLASE04-TS_BASE_02.ts)
-- [Hexagonal base 01](CLASE04-BASE_HEXAGONAL_P1.ts)

#### Interfaces en TypeScript
* Definicion de interfaces (`Animal`)
* Propiedades y metodos en interfaces
* Implementacion de interfaces en clases concretas

#### Clases en TypeScript
* Sintaxis basica de clases (`Mascota`)
* Propiedades y metodos
* Constructores
* Implementacion de interfaces

#### Encapsulamiento con Getters y Setters
* Propiedades privadas (`_edad`)
* Accesores para propiedades privadas
* Control de acceso a propiedades

#### Herencia
* Extension de clases base (`Perro extends Mascota`)
* Uso de `super()` para llamar constructores de clase padre
* Jerarquia de clases

#### Polimorfismo
* Principio de sustitucion de Liskov
* Sobrescritura de metodos (`hacerSonido()`)
* Uso de clases derivadas como instancias de la clase base

#### Modificadores de Acceso
* `public`: Acceso desde cualquier lugar (`ClasePublica`)
* `private`: Acceso solo desde la misma clase (`ClasePrivada`)
* `protected`: Acceso desde la misma clase y clases derivadas (`ClasProtejida`)
* `readonly`: Permite acceso pero no modificacion despues de inicializacion (`ClaseSoloLectura`)

#### Clases Genericas
* Implementacion con tipos genericos `<T>` (`Contenedor<T>`)
* Herencia con clases genericas (`ContenedorConNombre<T>`)
* Multiples tipos genericos (`ClaseContenedorEspecial<T,U>`)
* Restricciones en tipos genericos

#### Tipos Personalizados
* Uso de `type` para definir estructuras de datos (`Metadata`)
* Implementacion con clases e interfaces

#### Clases Abstractas
* Definicion de clases abstractas (`Figura`)
* Metodos abstractos (`calcularArea()`)
* Implementacion en clases derivadas (`Cuadrado`)

### **Arquitectura Hexagonal - Parte 1**

#### Dominios y Entidades
* Entidades del dominio para aplicacion medica
* Interfaces para estructuras de datos (`EntidadUsuario`, `EntidadConductor`, `EntidadMedico`, `EntidadHistoria`)
* Definicion de propiedades en las entidades

#### Data Transfer Objects (DTO)
* DTOs para respuesta (`DtoRespuestaUsuario`)
* DTOs para entrada (`DtoInsertarUsuario`)
* Mapeo entre entidades y DTOs (`mapearUsuarioDto`)

#### Servicios
* Definicion de interfaces de servicio (`ServicioUsuario`)
* Implementacion de servicios (`ServicioUsuarioImpl`)
* Metodos de servicio (`insertar`, `existeUsuario`)

#### Resultados y Respuestas
* Estructuras para respuestas del sistema (`Resultado<T>`)
* Uso de genericos en respuestas
* Trazabilidad de operaciones

#### Controladores
* Implementacion de controladores (`ControladorUsuario`)
* Inyeccion de dependencias a traves del constructor
* Manejo de solicitudes y respuestas
* Comunicacion entre capas en la arquitectura hexagonal

## Clase 05
Grabacion: https://drive.google.com/file/d/1oCXvCOHQlHwIoJH7jTlYrvvhp8tpYTPc/view?usp=sharing

-- [Emulador de entorno TypeScript](https://www.typescriptlang.org/play/)
-- [Hexagonal parte 02](Recursos/CLASE05-BASE_HEXAGONAL_P2.ts)
-- [Bases DDD](Recursos/CLASE05-ddd-tutorial.html)


### **Arquitectura Hexagonal - Parte 2**

#### Repositorios (Puertos Secundarios)
* Definicion de interfaces de repositorio (`RepositorioUsuario`)
* Implementacion de metodos como `guardar`, `listarTodos`, `existeConEmail` y `buscarPorEmail`
* Los repositorios actuan como puertos secundarios en la arquitectura hexagonal

#### Casos de Uso (Use Case)
* Implementacion de la interfaz `CasoUsoRegistrarUsuario` 
* Metodo `ejecutar` que recibe DTOs y trabaja con entidades del dominio
* Comunicacion con repositorios para la persistencia de datos
* Construccion de respuesta con trazabilidad (`Resultado<T>`)

#### Patrones de Implementacion
* Inyeccion de dependencias a traves del constructor
* Mapeo entre entidades de dominio y entidades de persistencia
* Simulacion de base de datos usando estructuras en memoria (Map)
* Gestion de tokens de autenticacion (Pendiente extender la explicacion)

#### Flujo Completo de la Arquitectura Hexagonal
* Iniciacion del controlador, servicios, casos de uso y repositorios
* Flujo de datos desde controlador → servicio → caso de uso → repositorio
* Transformacion bidireccional de datos mediante DTOs

### **Domain-Driven Design (DDD)**

#### Conceptos Fundamentales
* **Dominio**: Area de conocimiento o actividad a la que se aplica el programa
* **Lenguaje Ubicuo**: Lenguaje comun entre desarrolladores y expertos del dominio
* **Modelo de Dominio**: Representacion que captura los conceptos esenciales del negocio y sus relaciones

#### Contextos Delimitados (Bounded Contexts)
* Subdivisiones del dominio en contextos mas pequenos y manejables
* Cada contexto tiene su propio modelo consistente
* Representacion mediante Mapas de Contexto que muestran relaciones entre diferentes contextos

#### Entidades
* Objetos con identidad unica que persiste a lo largo del tiempo
* Caracteristicas: identificador unico, atributos modificables, ciclo de vida
* Implementacion en codigo mediante clases con metodos para gestionar su estado

#### Objetos de Valor
* Objetos inmutables sin identidad propia, definidos por sus atributos
* No tienen setters, solo metodos que devuelven nuevos objetos
* Utiles para representar conceptos como dinero, direcciones, coordenadas

#### Agregados y Raices de Agregado
* Grupos de objetos relacionados que se tratan como una unidad
* La raiz del agregado controla el acceso a los objetos internos
* Garantizan la consistencia del conjunto completo
* Solo la raiz es visible/accesible desde fuera del agregado

#### Capa Anticorrupcion
* Traduce entre diferentes modelos de dominio
* Protege un modelo de la influencia de otros (especialmente sistemas legacy)
* Facilita la integracion manteniendo la integridad del modelo



## Clase 06 - 1
Grabacion: https://drive.google.com/file/d/1-oJu8AGUuJcKmN_aKj9SQN6Lg6BdH3qV/view?usp=sharing
 
* [Base node js - typescript - fuentes](Recursos/CLASE06-1.ts)


### **Api básica con Express y TypeScript**

#### Express y TypeScript
* Creación de un servidor básico con Express
* Configuración de rutas GET y POST para usuarios
* Middleware para parsear JSON y manejar rutas no encontradas
* Uso de req.body para obtener datos de solicitudes

#### Migración a TypeScript
* Cambio de sintaxis: require por import
* Definición de interfaces (Usuario, NuevoUsuarioRequest)
* Adición de tipos a parámetros de funciones (Request, Response)
* Instrucciones para instalar TypeScript y definiciones de tipos

#### Desacoplamiento del servidor HTTP
* Separación del servidor HTTP de Express
* Uso directo de módulos http y url de Node.js
* Implementación de un requestListener personalizado
* Manejo mixto: algunas rutas con Express y otras con HTTP nativo

#### Organización de rutas
* Uso de express.Router() para agrupar rutas relacionadas
* Organización mediante prefijos de rutas (/api)
* Implementación de manejo de señales (SIGTERM) para cierre controlado
* Simulación de señales SIGTERM para pruebas

#### Clase Server encapsulada
* Creación de una clase Server para encapsular la lógica del servidor
* Métodos para iniciar y detener el servidor de forma controlada
* Implementación de Promises para operaciones asíncronas
* Separación clara entre la lógica de Express y la gestión del servidor HTTP



## Clase 06 - 2
Grabacion: https://drive.google.com/file/d/1EM8rZRURUkmbvBpAieRVZgQuFp0nvm4W/view?usp=sharing

* Fuentes del proyecto en la rama (dev-hexagonal-v1)
* [Base node js - typescript - fuentes](Recursos/CLASE06-2.ts)
* [Comando Base](CLASE06-2-ComandosBase.png)
* [Fase1 y 2](Recursos/CLASE06-2-Fase1-Fase2.png)
* [Hexagonal - Flujo base1 ](Recursos/CLASE06-2-Hexagonal-Flujo1.png)

### **Proyecto de Arquitectura Hexagonal en Node.js/TypeScript**

#### Configuración Inicial
* Creación de estructura base del proyecto con npm y TypeScript
* Configuración del tsconfig.json con opciones optimizadas para Node.js
* Instalación de dependencias: express y tipos para TypeScript

#### Conceptos Fundamentales
* Diferencias entre exportaciones por defecto y nombradas en JavaScript/TypeScript
* Comparación entre módulos HTTP nativos de Node.js y Express
* IncomingMessage/ServerResponse vs Request/Response de Express

#### Estructura del Proyecto
* Implementación de arquitectura modular
* Clases principales:

** App: Clase principal que gestiona el inicio/parada de la aplicación
** Server: Maneja la configuración del servidor HTTP y Express
** Routes: Sistema de registro de rutas con Express Router

#### Gestión de Peticiones HTTP
* Implementación de rutas con Express Router para mayor modularidad
* Manejo de diferentes métodos HTTP (GET, POST)
* Estructuras de datos con interfaces TypeScript (Usuario, NuevoUsuario)

#### Gestión del Ciclo de Vida
* Manejo de señales del sistema (SIGTERM, SIGINT)
* Procedimientos de inicio y cierre controlado del servidor
* Sistema de bootstrap para inicialización ordenada

#### Ejemplo de Endpoints
* Endpoint de health check para monitoreo



## Clase 07
Grabacion: https://drive.google.com/file/d/1y6ayl76f1UJHh948OhX94C-ExGuWfMyV/view?usp=sharing

* Fuentes del proyecto en la rama (dev-hexagonal-v2)
* [Puntos a tratados en clase](CLASE07-1.png)
* [Casos de Uso](CLASE07-2.png)
* [MVC vs Hexagonal](CLASE07-3.png)
* [Flujo de dependencias](CLASE07-4.png)


### **1. Instalaci贸n Awilix**

La instalación de Awilix se realiza mediante el gestor de paquetes npm:

```bash
# Instalar Awilix para la inyección de dependencias
npm install awilix --save
```

### **Modos de trabajo:**
Awilix ofrece diferentes modos para registrar clases en el contenedor:

- **Clasic** = mensajeService: asClass(NombreClase).singleton() -- OK
  - Este es el modo recomendado y estándar
  - Registra una clase en el contenedor como singleton
  - Ejemplo: `container.register('healthController', asClass(HealthController).singleton())`

- **Proxy** = xxxxxxx: asClass(NombreClase).singleton()
  - Modo alternativo que utiliza proxies para la inyecci贸n
  - Configurado en el proyecto con `injectionMode: InjectionMode.PROXY`
  - Ejemplo en la implementación:
  
```typescript
// app/di/index.ts
import { asClass, createContainer, InjectionMode } from "awilix";
import { AuthController } from "../controllers/auth.controller";
import { HealthController } from "../controllers/health.controller";

const container = createContainer({
  injectionMode: InjectionMode.PROXY
});

container.register({
  //Convención: identificador: [Controller]
  healthController: asClass(HealthController).singleton(),
  authController: asClass(AuthController).singleton(),
});

export { container };
```

### **2. Creacion de controller's**

Los controladores en arquitectura hexagonal actúan como adaptadores primarios:

```typescript
// app/controllers/health.controller.ts
import { Request, Response } from 'express';
import status from 'http-status';

export class HealthController {
    constructor() {}

    run(req: Request, res: Response): void {
        const health = {
            status: "ok",
            name: "hexagonal",
            version: "0.0.1",
            eviroment: "Prouccion"
        };

        res.status(status.OK).send(health);
    }
}

// app/controllers/auth.controller.ts
import { Request, Response } from 'express';
import status from 'http-status';

export class AuthController {
    run(req: Request, res: Response): void {
        res.status(status.OK).send({
            message: "Autenticación exitosa",
            token: "Token-213243242",
            expireIn: 3600
        });
    }
}
```

### **3. Registro dinámico de Rutas**

El registro dinámico de rutas permite una mayor flexibilidad:

```typescript
// app/routes/index.ts
import { Router } from "express";
import * as fs from 'fs';
import * as path from 'path';

export function registerRoutes(router: Router): void {
    const routerFiles = fs.readdirSync(__dirname)
        .filter(file => file.endsWith('.route.ts') || file.endsWith('.route.js'))
        .filter(file => file !== 'index.ts' && 'index.js');

    //Registrando cada una de las rutas
    for(const file of routerFiles) {
        //importar el archivo de ruta correspondiente
        const routerPath = path.join(__dirname, file);
        const route = require(routerPath);
        route.register(router);
    }
}
```

```typescript
// app/routes/auth.route.ts
import { Router } from 'express';
import { container } from '../di/index';

export const register = (router: Router): void => {
    const controller = container.resolve("authController");
    router.post("/auth", (req, res) => controller.run(req, res));
}
```

```typescript
// app/routes/health.route.ts
import { Router } from 'express';
import { container } from '../di/index';

export const register = (router: Router): void => {
    const controller = container.resolve("healthController");
    router.get("/health", (req, res) => controller.run(req, res));
}
```

### **4. Inyecci贸n de dependencias**

La estructura de la fábrica de rutas aprovecha Awilix para crear el router con el contenedor:

```typescript
// app/routes/router.ts
import { AwilixContainer } from "awilix";
import { Router } from "express";

export class RouterFactory {
    static create(basePath: string, container?: AwilixContainer): Router {
        const router = Router();
        const routesModules = require('./index');
        if(typeof routesModules.registerRoutes === "function") {
            routesModules.registerRoutes(router);
        }
        return router;
    }
}
```

Esta implementación permite:

- Registrar controladores en el contenedor de Awilix de forma centralizada
- Inyectar dependencias automáticamente donde se necesiten
- Cargar dinámicamente todas las rutas definidas en archivos específicos
- Mantener una estructura modular y extensible


## Clase 08
Grabacion: https://drive.google.com/file/d/1aFPniCU3n3Q5YghsQM7mTose_eUvBUpc/view?usp=sharing


* [Fuentes del proyecto en la rama] (dev-hexagonal-v3)
* [Contexto de clase de estudio - 1](CLASE08-1-Contexto1.png)

### **Temas tratados en clase**

En la clase 8 se trataron los siguientes temas:
- Estructura de carpetas para arquitectura hexagonal
- Creación de clase servicio
- Creación de clases casos de uso
- Creación de interfaces
- Inyección de dependencias con Awilix
- Contexto para caso de estudio parte 1

### **1. Estructura de Carpetas para Arquitectura Hexagonal**

La estructura de carpetas para arquitectura hexagonal organiza el código en capas bien definidas:

```
src/
├── app/                                  # Capa de Aplicación
│   ├── controllers/                      # Controladores HTTP
│   │   ├── auth.controller.ts
│   │   └── health.controller.ts
│   ├── di/                              # Inyección de dependencias
│   │   └── index.ts
│   ├── routes/                          # Definición de rutas
│   │   ├── auth.route.ts
│   │   ├── health.route.ts
│   │   ├── index.ts
│   │   └── index.txt
│   ├── router.ts
│   ├── app.ts
│   ├── server.ts
│   └── start.ts
├── context/                             # Contextos de dominio
│   └── auth/
│       ├── application/                 # Capa de aplicación
│       │   ├── dto/
│       │   ├── interface/
│       │   │   ├── auth-application.service.interface.ts
│       │   │   └── login.use-case.interface.ts
│       │   ├── services/
│       │   │   └── auth-application.service.ts
│       │   └── use-cases/
│       │       ├── login.use-case.ts
│       │       └── validate-password-format.use-case.ts
│       ├── domain/                      # Capa de dominio
│       │   ├── entity/
│       │   ├── repositories/
│       │   │   └── user.repository.interface.ts
│       │   └── value-objects/
│       └── infrastructure/              # Capa de infraestructura
│           ├── entity-persistence/
│           └── repositories/
├── cart/
├── shared/
└── OUTLINE
```

### **2. Creación de Clase Servicio**

Los servicios de aplicación orquestan los casos de uso y aplican la lógica de negocio:

```typescript
// context/auth/application/services/auth-application.service.ts
import { LoginRequestDto } from "../dto/login-request.dto";
import { LoginResponsetDto } from "../dto/login-response.dto";
import { IAuthApplicationService } from "../interface/auth-application.service.interface";
import { ILoginUseCase } from "../interface/login.use-case.interface";
import { ValidatePasswordFromatUseCase } from "../use-cases/validate-password-format.use-case";

export class AuthApplicationService implements IAuthApplicationService {

    constructor(
        private loginUseCase: ILoginUseCase,
        private validatePasswordFromatUseCase: ValidatePasswordFromatUseCase
    ){}

    async login(request: LoginRequestDto): Promise<LoginResponsetDto> {
        
        const  isValidFormat = await this.validatePasswordFormat(request.password);
        
        if (!isValidFormat){
            throw new Error("El formato de la contraseña no es válido");
        }

        const result = await this.loginUseCase.execute(request.email, request.password);

        return {
            token: result.token,
            expireIn: result.expiresIn,
            userId: result.userId
        }
    }
    
    async validatePasswordFormat(password: string): Promise<boolean> {
        return this.validatePasswordFromatUseCase.excute(password);
    }
}
```

### **3. Creación de Clases Casos de Uso**

Los casos de uso implementan la lógica de negocio específica:

```typescript
// context/auth/application/use-cases/login.use-case.ts
import { LoginResultDto } from "../dto/login-result.dto";
import { ILoginUseCase } from "../interface/login.use-case.interface";

export class LoginUseCase implements ILoginUseCase {

    async execute(email: string, password: string): Promise<LoginResultDto> {
        console.log("Ingresé al caso de uso: LoginUseCase");
        throw new Error("Method not implemented.");
    }
}

// context/auth/application/use-cases/validate-password-format.use-case.ts
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
```

### **4. Creación de Interfaces**

Las interfaces definen contratos entre capas:

```typescript
// context/auth/domain/repositories/user.repository.interface.ts
export interface IUserRepository {
    // Interface para el repositorio de usuarios
}

// context/auth/application/interface/auth-application.service.interface.ts
export interface IAuthApplicationService {
    login(request: LoginRequestDto): Promise<LoginResponsetDto>;
    validatePasswordFormat(password: string): Promise<boolean>;
}

// context/auth/application/interface/login.use-case.interface.ts
export interface ILoginUseCase {
    execute(email: string, password: string): Promise<LoginResultDto>;
}
```

### **5. Inyección de Dependencias con Awilix**

El controlador utiliza inyección de dependencias para recibir el servicio:

```typescript
// app/controllers/auth.controller.ts
import { Request, Response } from 'express';
import status from 'http-status';
import { IAuthApplicationService } from '../../context/auth/application/interface/auth-application.service.interface';

export class AuthController {
    constructor(private authApplicationService: IAuthApplicationService) {}
    
    async run(req: Request, res: Response): Promise<void> {        
        const result = await this.authApplicationService.login(req.body);
        
        res.status(status.OK).send({
            message: "Autenticación exitosa",
            token: result.token,
            expireIn: result.expireIn,
            userId: result.userId
        });
    }
}

// app/routes/auth.route.ts
import { Router } from 'express';
import { container } from '../di/index';

export const register = (router: Router): void => {
    const controller = container.resolve("authController");
    router.post("/auth", (req, res) => controller.run(req, res));
}
```

### **6. Contexto para Caso de Estudio - Parte 1**

**Sistema de Autenticación**

La implementación mostrada corresponde al contexto de autenticación, que incluye:

1. **Casos de uso**:
   - Login de usuarios
   - Validación de formato de contraseña

2. **Servicios de aplicación**:
   - AuthApplicationService que orquesta los casos de uso

3. **Reglas de negocio**:
   - Contraseña debe tener mínimo 8 caracteres
   - Al menos una letra mayúscula
   - Al menos una letra minúscula
   - Al menos un número
   - Al menos un caracter especial

4. **Interfaces**:
   - IAuthApplicationService
   - ILoginUseCase
   - IUserRepository

Esta estructura sigue los principios SOLID, específicamente el Principio de Sustitución de Liskov, permitiendo que las implementaciones concretas puedan ser sustituidas por otras que implementen las mismas interfaces.


## Clase 09
Grabacion: https://drive.google.com/file/d/1Pl4xovimoZpZh9GsrXyOuoVMHNe2mxLR/view?usp=sharing


* [Fuentes del proyecto en la rama] (dev-hexagonal-v4)
* [Componentes de la Arquitectura hexagonal](CLASE9-1.png)

### **Temas tratados en clase**

En la clase 9 se trataron los siguientes temas:
- A. Hexgaonal - sus componentes
- Capas cuando se une con DDD
- Implementacion del Repo. 
- Empaquetado profesional - Concepto


## Clase 10
Grabacion: https://drive.google.com/file/d/1wfcKDPN-XmdzMzua8xQqaP2HQ-6aryOt/view?usp=sharing

* Fuentes del proyecto en la rama (dev-hexagonal-v5)
* [Página de bases sobre CQRS](Recursos/CLASE-10-cqrs-bases.html)

### **Temas tratados en clase**

En la clase 10 se implementó:
- Gestión completa de usuarios con arquitectura hexagonal
- Implementación de patrones CQRS 
- Repositorios con datos de prueba
- Casos de uso para operaciones CRUD
- Command Handlers para escritura

### **Resumen de Implementación - Repositorios y CQRS**

#### **📁 Modificaciones en Repositorio**

##### **Repository Interface**
• Se agregó método `findAll(): Promise<User[]>` al contrato

##### **Repository Implementation** 
• Se implementó método `seedData()` con 3 usuarios de prueba (efajardo, juan, pepe)
• Se agregó método `findAll()` que retorna todos los usuarios del Map
• Los usuarios se almacenan con `this.users.set(element.id, element)`

#### **🔄 Implementación CQRS**

##### **DTOs de Comando**
• **CreateUserCommandDto**: Contiene email, password, name
• **CreateUserCommandResultDto**: Contiene id y success boolean

##### **Comando**
• **CreateUserCommand**: Implementa ICommand con datos del DTO
• Incluye método `validate()` con validaciones:
  - Email requerido y debe contener '@'
  - Password requerido con mínimo 8 caracteres  
  - Name requerido
• Lanza Error con lista de errores si hay validaciones fallidas

##### **Command Result**
• **CreateUserCommandResult**: Extiende ICommandResult
• Incluye propiedades opcionales: userId y data
• Estructura para manejar éxito/fallo del comando

##### **Command Handler**
• **CreateUserCommandHandler**: Implementa ICommandHandler
• Flujo del método `handle()`:
  - Valida el comando
  - Verifica si email ya existe
  - Crea nuevo usuario con ID generado
  - Guarda en repository
  - Retorna resultado con éxito/fallo
• Incluye normalización de datos (toLowerCase, trim)
• Manejo de errores con try/catch

#### **🏗️ Estructura CQRS Implementada**

##### **Interfaces Base**
• **ICommand**: Base para todos los comandos
• **ICommandResult**: Base para resultados de comandos
• **ICommandHandler**: Base para manejadores de comandos

##### **Casos de Uso Implementados**
• **ListUsersUseCase**: Obtiene usuarios del repository y mapea a DTO (sin password)
• **CreateUserUseCase**: Verifica email duplicado, crea usuario y retorna resultado

##### **Servicios de Aplicación**
• **UserApplicationService**: Coordina casos de uso
• Métodos: `listUsers()` y `createUser()`
• Inyecta ambos casos de uso en constructor

#### **🔧 Controladores y Rutas**

##### **UserController**
• Método `run()`: Lista usuarios (GET)
• Método `create()`: Crea usuario (POST)
• Manejo de errores con try/catch en ambos métodos
• Respuestas estructuradas con success, data y mensajes

##### **Rutas Implementadas**
• **GET /users**: Lista todos los usuarios
• **POST /users**: Crea nuevo usuario

#### **📝 Registro en IoC Container**
• Se registraron como singleton:
  - listUsersUseCase
  - createUserUseCase  
  - userApplicationService
  - userController
• Todos con patrón `asClass().singleton()`

## Clase 11
Grabacion: https://drive.google.com/file/d/18fiS9cehopxN9qamK5v9U10ak_fYyRed/view?usp=sharing

* Fuentes del proyecto en la rama (dev-hexagonal-v6)
* [Flujo base CQRS](Recursos/CLASE11-im1.png)

### **Temas tratados en clase**

En la clase 11 se implementó:
- Patrón Command Bus para desacoplar comandos de sus handlers
- Implementación completa del Command Handler con inyección de dependencias
- Resolución dinámica de handlers basada en convenciones de nomenclatura
- Sistema de caché para optimizar la resolución de handlers

### **🚌 Implementación del Command Bus**

#### **Command Bus - Núcleo del Sistema**

El Command Bus actúa como un mediador entre los comandos y sus respectivos handlers, proporcionando:

```typescript
export class CommandBus implements ICommandBus {
    private handlers = new Map<string, ICommandHandler<ICommand, ICommandResult>>();

    constructor(private readonly container: AwilixContainer) {
        // Registro automático de handlers disponibles en el contenedor
        const registrations = Object.keys(this.container.registrations);
        registrations.forEach(key => {
            if (key.includes('Handler') || key.includes('handler')) {
                console.log(` - ${key}`);
            }
        });
    }
}
```

#### **📋 Funcionalidades Principales**

##### **1. Validación y Ejecución de Comandos**
```typescript
async send<TResult extends ICommandResult>(command: ICommand): Promise<TResult> {
    // Paso 1: Validación del comando antes de ejecutarlo
    await command.validate();

    // Paso 2: Búsqueda del handler correspondiente
    let handler = this.handlers.get(command.constructor.name);

    // Si no está en caché, resolución dinámica
    if (!handler) {
        const resolveHandler = this.resolveHandlerDynmically(command.constructor.name);
        
        if (resolveHandler) {
            // Registro en caché para futuras ejecuciones
            this.handlers.set(command.constructor.name, resolveHandler);
            handler = resolveHandler;
        }
    }

    // Ejecución del handler
    return handler?.handle(command) as Promise<TResult>;
}
```

##### **2. Resolución Dinámica de Handlers**
```typescript
private resolveHandlerDynmically(commandName: string): ICommandHandler<ICommand, ICommandResult> | null {
    try {
        const handlerKey = this.getHandlerKey(commandName);
        
        // Verificación de registro en el contenedor
        if (!this.container.hasRegistration(handlerKey)) {
            console.warn(`key ${handlerKey} no está registrado en el contenedor`);
            return null;
        }

        // Resolución del handler desde el contenedor IoC
        const handler = this.container.resolve<ICommandHandler<ICommand, ICommandResult>>(handlerKey);
        console.log(`Handler: ${handlerKey} para comando ${commandName}`);
        return handler;

    } catch (error) {
        console.error(`Error al resolver handler: ${commandName}`, error);
        return null;
    }
}
```

##### **3. Convención de Nomenclatura**
```typescript
private getHandlerKey(commandName: string): string {
    // Conversión: CreateUserCommand → createUserCommandHandler
    const handlerName = commandName.replace("Command", "CommandHandler");
    return handlerName.charAt(0).toLowerCase() + handlerName.slice(1);
}
```

#### **🔧 Registro en el Contenedor IoC**

##### **Registro del Command Bus**
```typescript
// app/di/index.ts
commandBus: asFunction(() => {
    // Crear CommandBus con referencia al container
    return new CommandBus(container);
}).singleton(),
```

##### **Registro del Command Handler**
```typescript
createUserCommandHandler: asClass(CreateUserCommandHandler).singleton(),
```

#### **🏗️ Integración con Casos de Uso**

##### **Modificación del Use Case**
```typescript
export class CreateUserUseCase implements ICreateUserUseCase {
    constructor(private readonly commandBus: ICommandBus) {}

    async execute(userData: CreateUserDto): Promise<CreateUserResultDto> {
        console.log("INI - CreateUserUseCase - Orquestando creación de usuario");

        try {
            // Crear comando con DTO
            const command = new CreateUserCommand({
                email: userData.email,
                password: userData.password,
                name: userData.name
            });

            // Enviar comando a través del command bus
            const result: CreateUserCommandResult = await this.commandBus.send(command);

            if (!result.success) {
                throw new Error(result.message || "Error al crear usuario");
            }

            // Retornar DTO de resultado
            return result.data!;

        } catch (error) {
            console.error("Error en CreateUserUseCase:", error);
            throw error;
        }
    }
}
```

### **🎯 Beneficios de la Implementación**

#### **Desacoplamiento Total**
- Los casos de uso no conocen directamente los command handlers
- El Command Bus actúa como mediador transparente
- Facilita el testing y el intercambio de implementaciones

#### **Resolución Automática**
- Los handlers se resuelven dinámicamente por convención de nombres
- Sistema de caché para optimizar el rendimiento
- Registro automático en el contenedor IoC

#### **Escalabilidad**
- Fácil adición de nuevos comandos y handlers
- Mantenimiento simplificado del código
- Separación clara de responsabilidades

#### **Validación Centralizada**
- Todas las validaciones se ejecutan antes del handler
- Consistencia en el manejo de errores
- Trazabilidad completa del flujo de comandos

### **📝 Flujo Completo Implementado**

1. **Controller** → Recibe petición HTTP
2. **Use Case** → Crea comando y lo envía al Command Bus
3. **Command Bus** → Valida comando y resuelve handler dinámicamente
4. **Command Handler** → Ejecuta lógica de negocio
5. **Repository** → Persiste/recupera datos
6. **Response** → Retorna resultado estructurado

Esta implementación garantiza una arquitectura limpia, mantenible y escalable siguiendo los 
principios SOLID y las mejores prácticas de arquitectura hexagonal con CQRS.
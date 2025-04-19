
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



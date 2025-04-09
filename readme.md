# 馃敹 Arquitectura Hexagonal y Domain-Driven Design Avanzado 馃敹

## Instructores
- **Ingeniero de Software**: Especialista en patrones de arquitectura y desarrollo de software (Eduardo F. G.)
- **Ingeniero Cloud**: Experto en implementaciones y soluciones en AWS (J. Manuel Fajardo Guti茅rrez)

## Clase 01
Grabaci贸n: https://drive.google.com/file/d/1H36C63m417buP4GjMQJ6yA1hzNvgeVbI/view?usp=sharing

### **Instalaci贸n de Git | Instalaci贸n de Docker**
- Instalaci贸n de Git
- Instalaci贸n de Docker

### **Introducci贸n a AWS - Parte 1** 
- Historia
- Conciendo el ecosistema de AWS
- Pesentaci贸n de los m煤ltiples servicios
- Preguntas y Respuestas
- Tutorial base para creaci贸n de cuenta AWS: https://www.youtube.com/watch?v=CLoaGGWJT80&ab_channel=TutoVip

## Clase 02
Grabaci贸n: https://drive.google.com/file/d/1MnSsTqLReLHzERF0xTzP_e_l9BdApDYu/view?usp=sharing

### **Introducci贸n a AWS - Parte 2** Prueba de despliegue
- Introducci贸n a servicios de desarrollo ECR
- Introducci贸n a servicio de ECS
- Preguntas y Respuestas

### **Creaci贸n de WebSimple | Dockerizaci贸n | Despliegue y configuraci贸n en ECS**
- Creaci贸n de web simple
- Creaci贸n de archivo Dockerfile
- Instalaci贸n de CLI de AWS
- Subida del servicio dockerizado a AWS ECR
- Despliegue de Web en AWS ECS    
- Recurso: CLASE02_INSTALACION_DOCKERIZACION

## Clase 03
### **Herramientas e instadores**
Grabaci贸n: https://drive.google.com/file/d/11yZzuD8dEBhR74kk8Utyv3Dbx8NhMoV9/view

-- [Herramientas e Instaladores](Recursos/CLASE03-herramientas-instaladores.md)
-- [Emulador de entorno TypeScript](https://www.typescriptlang.org/play/)
-- [C贸digo base 01](Recursos/CLASE03-TS_BASE_01.ts)

#### Conceptos B谩sicos de TypeScript
##### Strings en TypeScript
* Declaraci贸n de variables string
* Concatenaci贸n de strings
* M茅todos comunes (length, toUpperCase, includes, substring)

##### Numbers en TypeScript
* Enteros (positivos, negativos, cero)
* N煤meros decimales (punto flotante)
* Notaci贸n cient铆fica
* Sistemas num茅ricos (binario, octal)
* Operaciones aritm茅ticas b谩sicas (suma, divisi贸n, m贸dulo)
* Conversiones (String a Number, parseInt)
* Separador num茅rico con guion bajo para legibilidad

##### Symbol
* Creaci贸n de s铆mbolos
* Comparaci贸n de s铆mbolos (demuestra que son 煤nicos)

##### Arrays
* Arrays de strings (dos sintaxis: string[] y Array<string>)
* Arrays de n煤meros
* Modificaci贸n de elementos en arrays

##### Objetos
* Objetos gen茅ricos
* Objetos con tipos espec铆ficos
* Objetos anidados

##### Tuplas
* Definici贸n de tuplas con tipos espec铆ficos
* Modificaci贸n de tuplas con push

##### Any
* Uso del tipo any para variables de tipo flexible

##### Types personalizados
* Definici贸n de types
* Combinaci贸n de types con el operador & (intersecci贸n)
* Uso de operadores de uni贸n (|) con types

##### Funciones
* Funciones con par谩metros tipados
* Callbacks tipados
* Implementaci贸n y uso de funciones

## Clase 04
Grabaci贸n: https://drive.google.com/file/d/1dVgSwwyCyiVYTbpkU5us8XCdZbgvx2YE/view?usp=sharing

-- [Emulador de entorno TypeScript](https://www.typescriptlang.org/play/)
-- [C贸digo base 02](Recursos/CLASE04-TS_BASE_02.ts)
-- [Hexagonal base 01](CLASE04-BASE_HEXAGONAL_P1.ts)

#### Interfaces en TypeScript
* Definici贸n de interfaces (`Animal`)
* Propiedades y m茅todos en interfaces
* Implementaci贸n de interfaces en clases concretas

#### Clases en TypeScript
* Sintaxis b谩sica de clases (`Mascota`)
* Propiedades y m茅todos
* Constructores
* Implementaci贸n de interfaces

#### Encapsulamiento con Getters y Setters
* Propiedades privadas (`_edad`)
* Accesores para propiedades privadas
* Control de acceso a propiedades

#### Herencia
* Extensi贸n de clases base (`Perro extends Mascota`)
* Uso de `super()` para llamar constructores de clase padre
* Jerarqu铆a de clases

#### Polimorfismo
* Principio de sustituci贸n de Liskov
* Sobrescritura de m茅todos (`hacerSonido()`)
* Uso de clases derivadas como instancias de la clase base

#### Modificadores de Acceso
* `public`: Acceso desde cualquier lugar (`ClasePublica`)
* `private`: Acceso solo desde la misma clase (`ClasePrivada`)
* `protected`: Acceso desde la misma clase y clases derivadas (`ClasProtejida`)
* `readonly`: Permite acceso pero no modificaci贸n despu茅s de inicializaci贸n (`ClaseSoloLectura`)

#### Clases Gen茅ricas
* Implementaci贸n con tipos gen茅ricos `<T>` (`Contenedor<T>`)
* Herencia con clases gen茅ricas (`ContenedorConNombre<T>`)
* M煤ltiples tipos gen茅ricos (`ClaseContenedorEspecial<T,U>`)
* Restricciones en tipos gen茅ricos

#### Tipos Personalizados
* Uso de `type` para definir estructuras de datos (`Metadata`)
* Implementaci贸n con clases e interfaces

#### Clases Abstractas
* Definici贸n de clases abstractas (`Figura`)
* M茅todos abstractos (`calcularArea()`)
* Implementaci贸n en clases derivadas (`Cuadrado`)

### **Arquitectura Hexagonal - Parte 1**

#### Dominios y Entidades
* Entidades del dominio para aplicaci贸n m茅dica
* Interfaces para estructuras de datos (`EntidadUsuario`, `EntidadConductor`, `EntidadMedico`, `EntidadHistoria`)
* Definici贸n de propiedades en las entidades

#### Data Transfer Objects (DTO)
* DTOs para respuesta (`DtoRespuestaUsuario`)
* DTOs para entrada (`DtoInsertarUsuario`)
* Mapeo entre entidades y DTOs (`mapearUsuarioDto`)

#### Servicios
* Definici贸n de interfaces de servicio (`ServicioUsuario`)
* Implementaci贸n de servicios (`ServicioUsuarioImpl`)
* M茅todos de servicio (`insertar`, `existeUsuario`)

#### Resultados y Respuestas
* Estructuras para respuestas del sistema (`Resultado<T>`)
* Uso de gen茅ricos en respuestas
* Trazabilidad de operaciones

#### Controladores
* Implementaci贸n de controladores (`ControladorUsuario`)
* Inyecci贸n de dependencias a trav茅s del constructor
* Manejo de solicitudes y respuestas
* Comunicaci贸n entre capas en la arquitectura hexagonal

## Clase 05
Grabación: https://meet.google.com/vhw-tkxr-zpa

-- [Emulador de entorno TypeScript](https://www.typescriptlang.org/play/)
-- [Hexagonal parte 02](Recursos/CLASE05-BASE_HEXAGONAL_P2.ts)
-- [Bases DDD](Recursos/CLASE05-ddd-tutorial.html)


### **Arquitectura Hexagonal - Parte 2**

#### Repositorios (Puertos Secundarios)
* Definición de interfaces de repositorio (`RepositorioUsuario`)
* Implementación de métodos como `guardar`, `listarTodos`, `existeConEmail` y `buscarPorEmail`
* Los repositorios actúan como puertos secundarios en la arquitectura hexagonal

#### Casos de Uso (Use Case)
* Implementación de la interfaz `CasoUsoRegistrarUsuario` 
* Método `ejecutar` que recibe DTOs y trabaja con entidades del dominio
* Comunicación con repositorios para la persistencia de datos
* Construcción de respuesta con trazabilidad (`Resultado<T>`)

#### Patrones de Implementación
* Inyección de dependencias a través del constructor
* Mapeo entre entidades de dominio y entidades de persistencia
* Simulación de base de datos usando estructuras en memoria (Map)
* Gestión de tokens de autenticación (Pendiente extender la explicación)

#### Flujo Completo de la Arquitectura Hexagonal
* Iniciación del controlador, servicios, casos de uso y repositorios
* Flujo de datos desde controlador → servicio → caso de uso → repositorio
* Transformación bidireccional de datos mediante DTOs

### **Domain-Driven Design (DDD)**

#### Conceptos Fundamentales
* **Dominio**: área de conocimiento o actividad a la que se aplica el programa
* **Lenguaje Ubicuo**: Lenguaje común entre desarrolladores y expertos del dominio
* **Modelo de Dominio**: Representación que captura los conceptos esenciales del negocio y sus relaciones

#### Contextos Delimitados (Bounded Contexts)
* Subdivisiones del dominio en contextos más peque?os y manejables
* Cada contexto tiene su propio modelo consistente
* Representación mediante Mapas de Contexto que muestran relaciones entre diferentes contextos

#### Entidades
* Objetos con identidad única que persiste a lo largo del tiempo
* Características: identificador único, atributos modificables, ciclo de vida
* Implementación en código mediante clases con métodos para gestionar su estado

#### Objetos de Valor
* Objetos inmutables sin identidad propia, definidos por sus atributos
* No tienen setters, solo métodos que devuelven nuevos objetos
* útiles para representar conceptos como dinero, direcciones, coordenadas

#### Agregados y Raíces de Agregado
* Grupos de objetos relacionados que se tratan como una unidad
* La raíz del agregado controla el acceso a los objetos internos
* Garantizan la consistencia del conjunto completo
* Solo la raíz es visible/accesible desde fuera del agregado

#### Capa Anticorrupción
* Traduce entre diferentes modelos de dominio
* Protege un modelo de la influencia de otros (especialmente sistemas legacy)
* Facilita la integración manteniendo la integridad del modelo

#### Aplicación Práctica
* Separación clara entre dominio, aplicación e infraestructura
* Uso de interfaces para definir contratos entre capas
* Enfoque centrado en el modelo de negocio más que en la tecnología

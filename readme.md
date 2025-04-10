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
Grabaci贸n: https://drive.google.com/file/d/1oCXvCOHQlHwIoJH7jTlYrvvhp8tpYTPc/view?usp=sharing

-- [Emulador de entorno TypeScript](https://www.typescriptlang.org/play/)
-- [Hexagonal parte 02](Recursos/CLASE05-BASE_HEXAGONAL_P2.ts)
-- [Bases DDD](Recursos/CLASE05-ddd-tutorial.html)

### **Arquitectura Hexagonal - Parte 2**

#### Repositorios (Puertos Secundarios)
* Definici贸n de interfaces de repositorio (`RepositorioUsuario`)
* Implementaci贸n de m茅todos como `guardar`, `listarTodos`, `existeConEmail` y `buscarPorEmail`
* Los repositorios act煤an como puertos secundarios en la arquitectura hexagonal

#### Casos de Uso (Use Case)
* Implementaci贸n de la interfaz `CasoUsoRegistrarUsuario` 
* M茅todo `ejecutar` que recibe DTOs y trabaja con entidades del dominio
* Comunicaci贸n con repositorios para la persistencia de datos
* Construcci贸n de respuesta con trazabilidad (`Resultado<T>`)

#### Patrones de Implementaci贸n
* Inyecci贸n de dependencias a trav茅s del constructor
* Mapeo entre entidades de dominio y entidades de persistencia
* Simulaci贸n de base de datos usando estructuras en memoria (Map)
* Gesti贸n de tokens de autenticaci贸n (Pendiente extender la explicaci贸n)

#### Flujo Completo de la Arquitectura Hexagonal
* Iniciaci贸n del controlador, servicios, casos de uso y repositorios
* Flujo de datos desde controlador → servicio → caso de uso → repositorio
* Transformaci贸n bidireccional de datos mediante DTOs

### **Domain-Driven Design (DDD)**

#### Conceptos Fundamentales
* **Dominio**: 脕rea de conocimiento o actividad a la que se aplica el programa
* **Lenguaje Ubicuo**: Lenguaje com煤n entre desarrolladores y expertos del dominio
* **Modelo de Dominio**: Representaci贸n que captura los conceptos esenciales del negocio y sus relaciones

#### Contextos Delimitados (Bounded Contexts)
* Subdivisiones del dominio en contextos m谩s peque帽os y manejables
* Cada contexto tiene su propio modelo consistente
* Representaci贸n mediante Mapas de Contexto que muestran relaciones entre diferentes contextos

#### Entidades
* Objetos con identidad 煤nica que persiste a lo largo del tiempo
* Caracter铆sticas: identificador 煤nico, atributos modificables, ciclo de vida
* Implementaci贸n en c贸digo mediante clases con m茅todos para gestionar su estado

#### Objetos de Valor
* Objetos inmutables sin identidad propia, definidos por sus atributos
* No tienen setters, solo m茅todos que devuelven nuevos objetos
* 脷tiles para representar conceptos como dinero, direcciones, coordenadas

#### Agregados y Ra铆ces de Agregado
* Grupos de objetos relacionados que se tratan como una unidad
* La ra铆z del agregado controla el acceso a los objetos internos
* Garantizan la consistencia del conjunto completo
* Solo la ra铆z es visible/accesible desde fuera del agregado

#### Capa Anticorrupci贸n
* Traduce entre diferentes modelos de dominio
* Protege un modelo de la influencia de otros (especialmente sistemas legacy)
* Facilita la integraci贸n manteniendo la integridad del modelo

#### Aplicaci贸n Pr谩ctica
* Separaci贸n clara entre dominio, aplicaci贸n e infraestructura
* Uso de interfaces para definir contratos entre capas
* Enfoque centrado en el modelo de negocio m谩s que en la tecnolog铆a
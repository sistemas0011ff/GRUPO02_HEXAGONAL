# 🔶 Arquitectura Hexagonal y Domain-Driven Design Avanzado 🔶

## Instructores
- **Ingeniero de Software**: Especialista en patrones de arquitectura y desarrollo de software (Eduardo F. G.)
- **Ingeniero Cloud**: Experto en implementaciones y soluciones en AWS (J. Manuel Fajardo Gutiérrez)

## Clase 01
Grabación: https://drive.google.com/file/d/1H36C63m417buP4GjMQJ6yA1hzNvgeVbI/view?usp=sharing

### **Instalación de Git | Instalación de Docker**
- Instalación de Git
- Instalación de Docker

### **Introducción a AWS - Parte 1** 
- Historia
- Conciendo el ecosistema de AWS
- Pesentación de los múltiples servicios
- Preguntas y Respuestas
- Tutorial base para creación de cuenta AWS: https://www.youtube.com/watch?v=CLoaGGWJT80&ab_channel=TutoVip

## Clase 02
Grabación: https://drive.google.com/file/d/1MnSsTqLReLHzERF0xTzP_e_l9BdApDYu/view?usp=sharing

### **Introducción a AWS - Parte 2** Prueba de despliegue
- Introducción a servicios de desarrollo ECR
- Introducción a servicio de ECS
- Preguntas y Respuestas

### **Creación de WebSimple | Dockerización | Despliegue y configuración en ECS**
- Creación de web simple
- Creación de archivo Dockerfile
- Instalación de CLI de AWS
- Subida del servicio dockerizado a AWS ECR
- Despliegue de Web en AWS ECS    
- Recurso: CLASE02_INSTALACION_DOCKERIZACION

## Clase 03
### **Herramientas e instadores**
Grabación: https://drive.google.com/file/d/11yZzuD8dEBhR74kk8Utyv3Dbx8NhMoV9/view

-- [Herramientas e Instaladores](Recursos/CLASE03-herramientas-instaladores.md)
-- [Emulador de entorno TypeScript](https://www.typescriptlang.org/play/)
-- [Código base 01](Recursos/CLASE03-TS_BASE_01.ts)

#### Conceptos Básicos de TypeScript
##### Strings en TypeScript
* Declaración de variables string
* Concatenación de strings
* Métodos comunes (length, toUpperCase, includes, substring)

##### Numbers en TypeScript
* Enteros (positivos, negativos, cero)
* Números decimales (punto flotante)
* Notación científica
* Sistemas numéricos (binario, octal)
* Operaciones aritméticas básicas (suma, división, módulo)
* Conversiones (String a Number, parseInt)
* Separador numérico con guion bajo para legibilidad

##### Symbol
* Creación de símbolos
* Comparación de símbolos (demuestra que son únicos)

##### Arrays
* Arrays de strings (dos sintaxis: string[] y Array<string>)
* Arrays de números
* Modificación de elementos en arrays

##### Objetos
* Objetos genéricos
* Objetos con tipos específicos
* Objetos anidados

##### Tuplas
* Definición de tuplas con tipos específicos
* Modificación de tuplas con push

##### Any
* Uso del tipo any para variables de tipo flexible

##### Types personalizados
* Definición de types
* Combinación de types con el operador & (intersección)
* Uso de operadores de unión (|) con types

##### Funciones
* Funciones con parámetros tipados
* Callbacks tipados
* Implementación y uso de funciones

## Clase 04
Grabación: https://drive.google.com/file/d/1dVgSwwyCyiVYTbpkU5us8XCdZbgvx2YE/view?usp=sharing

-- [Emulador de entorno TypeScript](https://www.typescriptlang.org/play/)
-- [Código base 02](Recursos/CLASE04-TS_BASE_02.ts)
-- [Hexagonal base 01](CLASE04-BASE_HEXAGONAL_P1.ts)

#### Interfaces en TypeScript
* Definición de interfaces (`Animal`)
* Propiedades y métodos en interfaces
* Implementación de interfaces en clases concretas

#### Clases en TypeScript
* Sintaxis básica de clases (`Mascota`)
* Propiedades y métodos
* Constructores
* Implementación de interfaces

#### Encapsulamiento con Getters y Setters
* Propiedades privadas (`_edad`)
* Accesores para propiedades privadas
* Control de acceso a propiedades

#### Herencia
* Extensión de clases base (`Perro extends Mascota`)
* Uso de `super()` para llamar constructores de clase padre
* Jerarquía de clases

#### Polimorfismo
* Principio de sustitución de Liskov
* Sobrescritura de métodos (`hacerSonido()`)
* Uso de clases derivadas como instancias de la clase base

#### Modificadores de Acceso
* `public`: Acceso desde cualquier lugar (`ClasePublica`)
* `private`: Acceso solo desde la misma clase (`ClasePrivada`)
* `protected`: Acceso desde la misma clase y clases derivadas (`ClasProtejida`)
* `readonly`: Permite acceso pero no modificación después de inicialización (`ClaseSoloLectura`)

#### Clases Genéricas
* Implementación con tipos genéricos `<T>` (`Contenedor<T>`)
* Herencia con clases genéricas (`ContenedorConNombre<T>`)
* Múltiples tipos genéricos (`ClaseContenedorEspecial<T,U>`)
* Restricciones en tipos genéricos

#### Tipos Personalizados
* Uso de `type` para definir estructuras de datos (`Metadata`)
* Implementación con clases e interfaces

#### Clases Abstractas
* Definición de clases abstractas (`Figura`)
* Métodos abstractos (`calcularArea()`)
* Implementación en clases derivadas (`Cuadrado`)

### **Arquitectura Hexagonal - Parte 1**

#### Dominios y Entidades
* Entidades del dominio para aplicación médica
* Interfaces para estructuras de datos (`EntidadUsuario`, `EntidadConductor`, `EntidadMedico`, `EntidadHistoria`)
* Definición de propiedades en las entidades

#### Data Transfer Objects (DTO)
* DTOs para respuesta (`DtoRespuestaUsuario`)
* DTOs para entrada (`DtoInsertarUsuario`)
* Mapeo entre entidades y DTOs (`mapearUsuarioDto`)

#### Servicios
* Definición de interfaces de servicio (`ServicioUsuario`)
* Implementación de servicios (`ServicioUsuarioImpl`)
* Métodos de servicio (`insertar`, `existeUsuario`)

#### Resultados y Respuestas
* Estructuras para respuestas del sistema (`Resultado<T>`)
* Uso de genéricos en respuestas
* Trazabilidad de operaciones

#### Controladores
* Implementación de controladores (`ControladorUsuario`)
* Inyección de dependencias a través del constructor
* Manejo de solicitudes y respuestas
* Comunicación entre capas en la arquitectura hexagonal

## Clase 05
Grabación: https://drive.google.com/file/d/1oCXvCOHQlHwIoJH7jTlYrvvhp8tpYTPc/view?usp=sharing

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
* Flujo de datos desde controlador � servicio � caso de uso � repositorio
* Transformación bidireccional de datos mediante DTOs

### **Domain-Driven Design (DDD)**

#### Conceptos Fundamentales
* **Dominio**: Área de conocimiento o actividad a la que se aplica el programa
* **Lenguaje Ubicuo**: Lenguaje común entre desarrolladores y expertos del dominio
* **Modelo de Dominio**: Representación que captura los conceptos esenciales del negocio y sus relaciones

#### Contextos Delimitados (Bounded Contexts)
* Subdivisiones del dominio en contextos más pequeños y manejables
* Cada contexto tiene su propio modelo consistente
* Representación mediante Mapas de Contexto que muestran relaciones entre diferentes contextos

#### Entidades
* Objetos con identidad única que persiste a lo largo del tiempo
* Características: identificador único, atributos modificables, ciclo de vida
* Implementación en código mediante clases con métodos para gestionar su estado

#### Objetos de Valor
* Objetos inmutables sin identidad propia, definidos por sus atributos
* No tienen setters, solo métodos que devuelven nuevos objetos
* Útiles para representar conceptos como dinero, direcciones, coordenadas

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

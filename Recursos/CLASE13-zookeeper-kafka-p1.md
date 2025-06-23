# 📚 ZOOKEEPER: SIMULANDO KAFKA - GUÍA COMPLETA

## 🎯 DIAGRAMA FUNDAMENTAL: CÓMO SE RELACIONAN BROKERS, TOPICS Y PARTICIONES

```
┌─────────────────────────────────────────────────────────────────┐
│                     CLUSTER DE KAFKA                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  PRODUCERS          SERVIDORES (BROKERS)         CONSUMERS      │
│  ┌────────┐        ┌──────────────┐            ┌──────────┐   │
│  │Producer│───────▶│   BROKER 0   │◀───────────│Consumer  │   │
│  │   A    │        │ servidor1.com│            │ Group A  │   │
│  └────────┘        └──────────────┘            └──────────┘   │
│                            ↓                          ↑         │
│  ┌────────┐        ┌──────────────┐                 │         │
│  │Producer│───────▶│   BROKER 1   │                 │         │
│  │   B    │        │ servidor2.com│◀────────────────┘         │
│  └────────┘        └──────────────┘                           │
│     ↓                      ↓                                   │
│     └──────────────────────┴─────────────┐                    │
│                                           ↓                    │
│  ┌─────────────────────────────────────────────────┐          │
│  │              TOPICS (Categorías)                 │          │
│  ├─────────────────────────────────────────────────┤          │
│  │                                                  │          │
│  │  TOPIC: "ventas" (3 particiones)                │          │
│  │  ┌─────────┐ ┌─────────┐ ┌─────────┐          │          │
│  │  │ Part. 0 │ │ Part. 1 │ │ Part. 2 │          │          │
│  │  │Líder: B0│ │Líder: B1│ │Líder: B0│          │          │
│  │  └─────────┘ └─────────┘ └─────────┘          │          │
│  └─────────────────────────────────────────────────┘          │
├─────────────────────────────────────────────────────────────────┤
│                        ZOOKEEPER                                 │
│  ┌─────────────────────────────────────────────────┐          │
│  │ /brokers/ids/[0,1]     ← Brokers registrados    │          │
│  │ /brokers/topics/ventas ← Metadata del topic     │          │
│  │ /consumers/group-a     ← Consumers registrados  │          │
│  │ ❌ NO HAY /producers   ← Producers NO están aquí│          │
│  └─────────────────────────────────────────────────┘          │
└─────────────────────────────────────────────────────────────────┘

NOTA: Producers → Brokers (directo)
      Consumers → ZooKeeper + Brokers (coordinación)
```

## ❓ PREGUNTAS FRECUENTES ACLARADAS

### 1. ¿Los topics se crean "dentro" de los brokers?
**NO.** Los topics son entidades lógicas del cluster completo, no pertenecen a un broker específico.

### 2. ¿Cada topic puede tener varias particiones?
**SÍ.** Puedes crear un topic con 1, 3, 10, 100 particiones según necesites.

### 3. ¿De qué depende la cantidad de particiones?
- **Paralelismo deseado**: Más particiones = más procesamiento paralelo
- **Cantidad de brokers**: No tiene sentido tener 100 particiones con 3 brokers
- **Volumen de datos**: Más datos = más particiones recomendadas
- **Ejemplo**: Topic "ventas" con millones de mensajes → 10 particiones
- **Ejemplo**: Topic "configuración" con pocos mensajes → 1 partición

### 4. ¿Un mismo topic puede estar en varios brokers?
**SÍ, SIEMPRE.** Las particiones de un topic se DISTRIBUYEN entre los brokers:

```
EJEMPLO REAL:
Topic "pedidos" con 6 particiones en 3 brokers:

Broker 0: [Partición 0, Partición 3]
Broker 1: [Partición 1, Partición 4]
Broker 2: [Partición 2, Partición 5]

El topic "pedidos" está distribuido en LOS 3 BROKERS
```

## 📋 Tabla de Contenidos
- [Diagrama Fundamental](#diagrama-fundamental)
- [Conceptos Básicos](#conceptos-básicos)
- [Prerequisitos](#prerequisitos)
- [Paso 1: Estructura Inicial](#paso-1-estructura-inicial)
- [Paso 2: Registrar Brokers](#paso-2-registrar-brokers)
- [Paso 3: Crear Topics y Particiones](#paso-3-crear-topics-y-particiones)
- [Paso 4: Elección de Líder](#paso-4-elección-de-líder)
- [Paso 5: Simular Mensajes](#paso-5-simular-mensajes)
- [Paso 6: Consumer Groups y Offsets](#paso-6-consumer-groups-y-offsets)
- [Paso 7: Simulación de Fallas](#paso-7-simulación-de-fallas)
- [Paso 8: Watchers en Tiempo Real](#paso-8-watchers-en-tiempo-real)
- [Ejercicio Completo](#ejercicio-completo)

## 🎯 Conceptos Básicos

### 🎪 Ejemplo Visual Completo
```
SITUACIÓN: Tienda online con 3 servidores

SERVIDORES (Brokers):
- Broker 0: servidor-usa.com
- Broker 1: servidor-europa.com  
- Broker 2: servidor-asia.com

TOPICS Y SUS PARTICIONES:
1. Topic "ventas" (3 particiones)
   - Partición 0 → Manejada por Broker 0
   - Partición 1 → Manejada por Broker 1
   - Partición 2 → Manejada por Broker 2

2. Topic "logs" (2 particiones)
   - Partición 0 → Manejada por Broker 0
   - Partición 1 → Manejada por Broker 2

RESULTADO: Los topics están DISTRIBUIDOS entre todos los brokers
```

### ZooKeeper - Conceptos Fundamentales

#### 🌳 **Znodes**
- **¿Qué es?** Nodo en el árbol de ZooKeeper (como archivo/carpeta)
- **Tipos**: Persistente o Efímero
- **Puede contener**: Datos (hasta 1MB) y metadatos

#### ⏰ **Znodes Efímeros (-e)**
- **¿Qué es?** Nodo que existe solo mientras la sesión está activa
- **Uso en Kafka**: Detectar brokers/consumers vivos
- **Magia**: Desaparece automáticamente si la conexión se pierde
- **Comando**: `create -e /path "data"`
- **Ejemplo**: `/brokers/ids/0` es efímero

#### 📌 **Znodes Persistentes**
- **¿Qué es?** Nodo que permanece hasta ser eliminado manualmente
- **Uso en Kafka**: Guardar configuración, topics, metadata
- **Comando**: `create /path "data"`
- **Ejemplo**: `/brokers/topics/ventas` es persistente

#### 🔢 **Znodes Secuenciales (-s)**
- **¿Qué es?** ZooKeeper añade un número único al final
- **Uso**: Crear IDs únicos, colas ordenadas
- **Comando**: `create -s /path "data"`
- **Resultado**: `/path0000000001`, `/path0000000002`...

#### 👀 **Watchers**
- **¿Qué es?** Notificación cuando un znode cambia
- **Uso en Kafka**: Detectar brokers caídos, nuevos topics
- **Tipos**: One-time (una vez) o Persistent (continuo)
- **Comandos**: `ls -w /path`, `get -w /path`, `stat -w /path`

#### 🔄 **Sesiones**
- **¿Qué es?** Conexión entre cliente y ZooKeeper
- **Timeout**: Si no hay heartbeat, la sesión muere
- **Efecto**: Todos los znodes efímeros de esa sesión desaparecen

#### 📊 **Quorum**
- **¿Qué es?** Mayoría de servidores ZooKeeper acordando
- **Regla**: Necesitas (n/2)+1 servidores vivos
- **Ejemplo**: Con 3 servidores, necesitas mínimo 2 vivos

### Conceptos de Kafka en ZooKeeper

#### 🖥️ **Broker**
- **¿Qué es?** Servidor que almacena y maneja mensajes
- **Analogía**: Como un empleado en una oficina
- **En ZooKeeper**: Se registra en `/brokers/ids/[broker-id]`

#### 📁 **Topic**
- **¿Qué es?** Categoría/canal de mensajes
- **Analogía**: Como una carpeta de emails (ventas, inventario, logs)
- **En ZooKeeper**: Se crea en `/brokers/topics/[topic-name]`

#### 🎪 **Partition**
- **¿Qué es?** División de un topic para procesamiento paralelo
- **Analogía**: Como dividir una fila larga en varias cajas
- **IMPORTANTE**: Las particiones TIENEN brokers, no al revés
- **En ZooKeeper**: `/brokers/topics/[topic]/partitions/[0,1,2...]`

#### 👑 **Leader**
- **¿Qué es?** El broker ASIGNADO a una partición específica
- **Aclaración**: Cada PARTICIÓN tiene UN broker líder (no al revés)
- **Ejemplo**: Partición 0 → Líder: Broker 1
- **En ZooKeeper**: `/brokers/topics/[topic]/partitions/[id]/state`

#### 🎮 **Controller**
- **¿Qué es?** Broker que coordina todo el cluster
- **Función**: Asigna líderes cuando un broker cae
- **En ZooKeeper**: `/controller`

#### 📍 **Offset**
- **¿Qué es?** Número que indica hasta dónde se ha leído
- **Analogía**: Como un marcador de páginas
- **En ZooKeeper**: `/consumers/[group]/offsets/[topic]/[partition]`

#### 📤 **Producer** (NO en ZooKeeper)
- **¿Qué es?** Aplicación que envía mensajes a Kafka
- **Analogía**: Como alguien que envía cartas al correo
- **IMPORTANTE**: Los producers NO se registran en ZooKeeper
- **¿Por qué?**: Se conectan directamente a los brokers
- **Conexión**: Producer → Brokers (directo, sin ZooKeeper)

#### 📥 **Consumer**
- **¿Qué es?** Aplicación que lee mensajes de Kafka
- **Analogía**: Como alguien que recibe cartas
- **En ZooKeeper (legacy)**: `/consumers/[group-name]`
- **NOTA**: Kafka moderno guarda offsets en topic especial `__consumer_offsets`

#### 👥 **Consumer Group**
- **¿Qué es?** Grupo de consumidores trabajando juntos
- **Función**: Dividen el trabajo de leer particiones
- **En ZooKeeper (legacy)**: `/consumers/[group-name]`

### ❓ ¿Qué NO está en ZooKeeper?

#### 1. **Producers**
- NO se registran en ZooKeeper
- Se conectan directamente a los brokers
- Obtienen metadata del cluster via brokers

#### 2. **Mensajes reales**
- Los mensajes se almacenan en los brokers
- ZooKeeper solo guarda metadata

#### 3. **Datos de aplicación**
- ZooKeeper es para coordinación, no almacenamiento

### 🔄 Relación Broker-Partición (IMPORTANTE)

```
CORRECTO pensar así:
Topic "ventas" (3 particiones)
├── Partición 0 → necesita un líder → Broker 1 asignado
├── Partición 1 → necesita un líder → Broker 2 asignado
└── Partición 2 → necesita un líder → Broker 3 asignado

Un broker puede manejar MÚLTIPLES particiones:
- Broker 1: Líder de partición 0, réplica de partición 2
- Broker 2: Líder de partición 1, réplica de partición 0
- Broker 3: Líder de partición 2, réplica de partición 1
```

## 🖥️ Configuración de Terminales

Para esta guía necesitarás **2-3 terminales** para ver la magia de ZooKeeper en acción:

- **Terminal 1**: Cliente principal donde harás la mayoría del trabajo
- **Terminal 2**: Para simular cambios y ver notificaciones
- **Terminal 3** (opcional): Para monitorear logs o simular múltiples clientes

```
┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│   Terminal 1    │  │   Terminal 2    │  │   Terminal 3    │
│  (Principal)    │  │  (Simulador)    │  │   (Monitor)     │
└─────────────────┘  └─────────────────┘  └─────────────────┘
```

## 📁 Paso 1: Estructura Inicial
```bash
version: '3'

services:
  zookeeper:
    image: zookeeper:3.8
    container_name: zookeeper
    ports:
      - "2181:2181"
    environment:
      ZOO_MY_ID: 1
      
#Iniciar docker compose
docker-compose up -d

```
### 🖥️ Terminal 1 (Principal)
```bash
#Iniciar docker compose
docker-compose up -d

# Conectar a ZooKeeper
docker exec -it zookeeper zkCli.sh

# Crear estructura base (nodos persistentes)
create /kafka-simulation ""
create /kafka-simulation/brokers ""
create /kafka-simulation/brokers/ids ""
create /kafka-simulation/brokers/topics ""
create /kafka-simulation/controller ""
create /kafka-simulation/consumers ""

# Verificar
ls /kafka-simulation
```

## 🖥️ Paso 2: Registrar Brokers (Usando Znodes Efímeros)

### Concepto: BROKER y ZNODES EFÍMEROS
Un broker es un servidor Kafka que almacena y sirve mensajes.
**IMPORTANTE**: Usamos znodes efímeros (-e) para que desaparezcan si el broker se desconecta.

```bash
# Registrar 3 brokers (simulando que se conectan)
# -e = EFÍMERO: desaparece si la sesión termina
create -e /kafka-simulation/brokers/ids/0 {"host":"servidor1.com","port":9092,"timestamp":"1234567890"}
create -e /kafka-simulation/brokers/ids/1 {"host":"servidor2.com","port":9092,"timestamp":"1234567891"}
create -e /kafka-simulation/brokers/ids/2 {"host":"servidor3.com","port":9092,"timestamp":"1234567892"}

# Verificar brokers activos
ls /kafka-simulation/brokers/ids
# [0, 1, 2]

# Ver información de un broker
get /kafka-simulation/brokers/ids/0

# Verificar que es efímero
stat /kafka-simulation/brokers/ids/0
# Busca: ephemeralOwner = 0x... (NO es 0x0)
# Si fuera persistente vería: ephemeralOwner = 0x0
```

### 🔍 Diferencia entre Efímero y Persistente
```bash
# Crear nodo PERSISTENTE (para comparar)
create /kafka-simulation/test-persistente "soy persistente"

# Crear nodo EFÍMERO
create -e /kafka-simulation/test-efimero "desaparezco si me desconecto"

# Comparar con stat
stat /kafka-simulation/test-persistente
# ephemeralOwner = 0x0 (ES PERSISTENTE)

stat /kafka-simulation/test-efimero
# ephemeralOwner = 0x17abc... (ES EFÍMERO)
```

## 📊 Paso 3: Crear Topics y Particiones

### Concepto: TOPIC y PARTITION
- **Topic**: Canal lógico para mensajes (ej: "ventas", "logs")
- **Partition**: División física del topic para procesamiento paralelo
- **IMPORTANTE**: Cada partición NECESITA un broker líder asignado

### 🔄 Aclaración Broker vs Partición
```
Las PARTICIONES necesitan BROKERS (no al revés):
- Partición 0 → asignada a → Broker 1 (líder)
- Partición 1 → asignada a → Broker 2 (líder)
- Partición 2 → asignada a → Broker 3 (líder)

Un broker puede manejar varias particiones a la vez.
```

### ⚠️ ACLARACIÓN IMPORTANTE SOBRE LA RUTA EN ZOOKEEPER

**La ruta `/brokers/topics/...` es CONFUSA pero es así por razones históricas:**

```bash
# LA RUTA EN ZOOKEEPER:
/brokers/topics/ventas/partitions/0

# NO SIGNIFICA que los brokers "contienen" topics
# Es solo una convención de nomenclatura
```

**PIÉNSALO ASÍ:**
```
/kafka-metadata/              # Metadata del cluster Kafka
    /broker-registry/         # Registro de brokers activos
        /0, /1, /2           # IDs de brokers
    /topic-registry/          # Registro de topics (independiente de brokers)
        /ventas/             # Topic "ventas" existe en el cluster
            /partitions/     # Sus particiones
                /0/state     # {"leader": 1} ← Asignada a Broker 1
                /1/state     # {"leader": 2} ← Asignada a Broker 2
```

### 🔄 Ejemplo Práctico: Topic distribuido en múltiples brokers
```bash
# Crear un topic "pedidos" con 4 particiones en 2 brokers

# Primero crear toda la estructura
create /kafka-simulation/brokers/topics/pedidos ""
create /kafka-simulation/brokers/topics/pedidos/partitions ""
create /kafka-simulation/brokers/topics/pedidos/partitions/0 ""
create /kafka-simulation/brokers/topics/pedidos/partitions/1 ""
create /kafka-simulation/brokers/topics/pedidos/partitions/2 ""
create /kafka-simulation/brokers/topics/pedidos/partitions/3 ""

# Crear nodos state
create /kafka-simulation/brokers/topics/pedidos/partitions/0/state ""
create /kafka-simulation/brokers/topics/pedidos/partitions/1/state ""
create /kafka-simulation/brokers/topics/pedidos/partitions/2/state ""
create /kafka-simulation/brokers/topics/pedidos/partitions/3/state ""

# Las 4 particiones se distribuyen (usar comillas simples):
set /kafka-simulation/brokers/topics/pedidos/partitions/0/state '{"leader":0}'  # Broker 0
set /kafka-simulation/brokers/topics/pedidos/partitions/1/state '{"leader":1}'  # Broker 1
set /kafka-simulation/brokers/topics/pedidos/partitions/2/state '{"leader":0}'  # Broker 0
set /kafka-simulation/brokers/topics/pedidos/partitions/3/state '{"leader":1}'  # Broker 1

# RESULTADO:
# - Broker 0 maneja particiones 0 y 2
# - Broker 1 maneja particiones 1 y 3
# - El topic "pedidos" está en AMBOS brokers
```

```bash
# Crear topic "ventas" con 3 particiones
create /kafka-simulation/brokers/topics/ventas ""
create /kafka-simulation/brokers/topics/ventas/partitions ""

# Crear 3 particiones (son del TOPIC, no del broker)
create /kafka-simulation/brokers/topics/ventas/partitions/0 ""
create /kafka-simulation/brokers/topics/ventas/partitions/1 ""
create /kafka-simulation/brokers/topics/ventas/partitions/2 ""

# IMPORTANTE: Crear el nodo 'state' antes de asignar datos
create /kafka-simulation/brokers/topics/ventas/partitions/0/state ""
create /kafka-simulation/brokers/topics/ventas/partitions/1/state ""
create /kafka-simulation/brokers/topics/ventas/partitions/2/state ""

# Ahora SÍ asignar qué broker maneja cada partición
# Usar comillas simples para evitar problemas con JSON
# Partición 0 será manejada por Broker 0
set /kafka-simulation/brokers/topics/ventas/partitions/0/state '{"leader":0,"isr":[0,1],"replicas":[0,1]}'

# Partición 1 será manejada por Broker 1
set /kafka-simulation/brokers/topics/ventas/partitions/1/state '{"leader":1,"isr":[1,2],"replicas":[1,2]}'

# Partición 2 será manejada por Broker 2
set /kafka-simulation/brokers/topics/ventas/partitions/2/state '{"leader":2,"isr":[2,0],"replicas":[2,0]}'

# Verificar estructura
ls /kafka-simulation/brokers/topics
# [ventas] ← Topics disponibles

ls /kafka-simulation/brokers/topics/ventas/partitions
# [0, 1, 2] ← El topic "ventas" tiene 3 particiones

# Ver qué broker maneja cada partición
get /kafka-simulation/brokers/topics/ventas/partitions/0/state
# {"leader":0,"isr":[0,1],"replicas":[0,1]} = Partición 0 es manejada por Broker 0

get /kafka-simulation/brokers/topics/ventas/partitions/1/state
# {"leader":1,"isr":[1,2],"replicas":[1,2]} = Partición 1 es manejada por Broker 1
```

### 📁 Resumen Visual de la Estructura:
```
/kafka-simulation/
    /brokers/               ← Sistema de brokers de Kafka
        /ids/               ← Brokers activos
            /0              ← Broker ID 0 está vivo
            /1              ← Broker ID 1 está vivo
            /2              ← Broker ID 2 está vivo
        /topics/            ← Metadata de topics (NO "dentro" de brokers)
            /ventas/        ← Topic "ventas"
                /partitions/
                    /0/state {"leader":0} ← Partición 0 asignada a Broker 0
                    /1/state {"leader":1} ← Partición 1 asignada a Broker 1
                    /2/state {"leader":2} ← Partición 2 asignada a Broker 2
```

## 👑 Paso 4: Elección de Líder (Znode Efímero)

### Concepto: CONTROLLER y ELECCIÓN
El controller es el broker que gestiona el estado del cluster.
Usamos znode efímero para reelección automática si muere.

```bash
# Elegir broker 0 como controller (efímero para reelección automática)
create -e /kafka-simulation/controller {"version":1,"brokerid":0,"timestamp":"1234567890"}

# Verificar
get /kafka-simulation/controller
# {"version":1,"brokerid":0,"timestamp":"1234567890"}

# Ver que es efímero
stat /kafka-simulation/controller
# ephemeralOwner != 0x0 (confirmado efímero)
```

## 📨 Paso 5: Simular Mensajes y Producers

### ⚠️ NOTA IMPORTANTE: Producers NO están en ZooKeeper
Los **producers** se conectan directamente a los brokers, NO se registran en ZooKeeper.

```
FLUJO REAL:
Producer → Broker (directo) → Escribe en partición

FLUJO DE CONSUMERS (legacy):
Consumer → ZooKeeper (para coordinación) → Broker → Lee partición
```

### Simular almacenamiento de mensajes (lo que haría un producer)
```bash
# Crear estructura para mensajes
create /kafka-simulation/brokers/topics/ventas/partitions/0/messages ""
create /kafka-simulation/brokers/topics/ventas/partitions/1/messages ""
create /kafka-simulation/brokers/topics/ventas/partitions/2/messages ""

# Simular mensajes en partición 0 (usando -s para znodes secuenciales)
# -s = SECUENCIAL: ZooKeeper añade número único al final
create -s /kafka-simulation/brokers/topics/ventas/partitions/0/messages/msg '{"offset":0,"value":"Venta: Laptop $1200","timestamp":"1234567900"}'
create -s /kafka-simulation/brokers/topics/ventas/partitions/0/messages/msg '{"offset":1,"value":"Venta: Mouse $25","timestamp":"1234567901"}'
create -s /kafka-simulation/brokers/topics/ventas/partitions/0/messages/msg '{"offset":2,"value":"Venta: Teclado $75","timestamp":"1234567902"}'

# Ver mensajes (nota los números secuenciales añadidos)
ls /kafka-simulation/brokers/topics/ventas/partitions/0/messages
# [msg0000000000, msg0000000001, msg0000000002]

# Leer un mensaje específico
get /kafka-simulation/brokers/topics/ventas/partitions/0/messages/msg0000000000
```

## 👥 Paso 6: Consumer Groups y Offsets

### Concepto: CONSUMER GROUP y OFFSET
- **Consumer Group**: Conjunto de consumidores que leen un topic
- **Offset**: Posición de lectura (último mensaje leído)

```bash
# Crear consumer group "analytics"
create /kafka-simulation/consumers/analytics ""
create /kafka-simulation/consumers/analytics/offsets ""
create /kafka-simulation/consumers/analytics/offsets/ventas ""

# Registrar offsets (cuánto han leído)
create /kafka-simulation/consumers/analytics/offsets/ventas/0 "2"
create /kafka-simulation/consumers/analytics/offsets/ventas/1 "5"
create /kafka-simulation/consumers/analytics/offsets/ventas/2 "3"

# Verificar offset
get /kafka-simulation/consumers/analytics/offsets/ventas/0
# "2" = Han leído hasta el mensaje 2 de la partición 0
```

## 💥 Paso 7: Simulación de Fallas

### 🖥️ Terminal 1: Preparar watchers
```bash
# Poner watcher para detectar cambios
ls -w /kafka-simulation/brokers/ids
# Espera aquí...
```

### 🖥️ Terminal 2: Simular caída
```bash
# Conectar a ZooKeeper
docker exec -it zookeeper zkCli.sh

# Ver estado actual
ls /kafka-simulation/brokers/ids
# [0, 1, 2]

# SIMULAR CAÍDA: Eliminar broker 1
delete /kafka-simulation/brokers/ids/1

# 🔔 En Terminal 1 verás:
# WatchedEvent type:NodeChildrenChanged
```

### 🖥️ Terminal 1: Continuar con reelección
```bash
# Verificar brokers activos
ls /kafka-simulation/brokers/ids
# [0, 2] - Broker 1 desapareció

# Ver qué broker manejaba la partición 1
get /kafka-simulation/brokers/topics/ventas/partitions/1/state
# {"leader":1,"isr":[1,2],"replicas":[1,2]}

# REELECCIÓN: Asignar nuevo líder
set /kafka-simulation/brokers/topics/ventas/partitions/1/state {"leader":2,"isr":[2],"replicas":[1,2]}

# Verificar cambio
get /kafka-simulation/brokers/topics/ventas/partitions/1/state
# {"leader":2} - Ahora Broker 2 es líder
```

### Simular cambio de controller (ambos terminales)

#### 🖥️ Terminal 1: Observar controller
```bash
get -w /kafka-simulation/controller
# {"version":1,"brokerid":0,"timestamp":"1234567890"}
# Espera aquí...
```

#### 🖥️ Terminal 2: Simular muerte del controller
```bash
# Controller muere
delete /kafka-simulation/controller

# 🔔 Terminal 1 recibe: WatchedEvent type:NodeDeleted

# Nuevo controller toma el control
create -e /kafka-simulation/controller {"version":2,"brokerid":2,"timestamp":"1234567950"}
```

## 👀 Paso 8: Watchers en Tiempo Real

### 🎯 Demostración con 2 Terminales

#### 🖥️ Terminal 1: Configurar Watchers
```bash
# Observar cambios en brokers
ls -w /kafka-simulation/brokers/ids
# Terminal queda esperando...
```

#### 🖥️ Terminal 2: Hacer cambios
```bash
# Conectar a ZooKeeper
docker exec -it zookeeper zkCli.sh

# Agregar nuevo broker (efímero)
create -e /kafka-simulation/brokers/ids/3 {"host":"servidor4.com","port":9092}

# 🔔 En Terminal 1 verás inmediatamente:
# WatchedEvent state:SyncConnected type:NodeChildrenChanged path:/kafka-simulation/brokers/ids
```

### 🎯 Tipos de Eventos de Watchers

#### 🖥️ Terminal 1: Diferentes tipos de watchers
```bash
# 1. Observar creación/eliminación de nodos
stat -w /kafka-simulation/brokers/ids/3

# 2. Observar cambios en datos
get -w /kafka-simulation/brokers/topics/ventas/partitions/0/state

# 3. Observar cambios en hijos
ls -w /kafka-simulation/brokers/topics
```

#### 🖥️ Terminal 2: Provocar diferentes eventos
```bash
# Provocar NodeDeleted (si existe el broker 3)
delete /kafka-simulation/brokers/ids/3
# Terminal 1: WatchedEvent type:NodeDeleted

# Provocar NodeDataChanged
set /kafka-simulation/brokers/topics/ventas/partitions/0/state {"leader":2}
# Terminal 1: WatchedEvent type:NodeDataChanged

# Provocar NodeChildrenChanged
create /kafka-simulation/brokers/topics/logs ""
# Terminal 1: WatchedEvent type:NodeChildrenChanged
```

### 🎯 Simulación: Detectar Broker Caído en Tiempo Real

#### 🖥️ Terminal 1: Monitor de brokers
```bash
# Poner watcher en todos los brokers
ls -w /kafka-simulation/brokers/ids
# También en un broker específico
stat -w /kafka-simulation/brokers/ids/0
```

#### 🖥️ Terminal 2: Simular desconexión
```bash
# Si el broker 0 fuera real y se desconectara,
# su znode efímero desaparecería automáticamente
# Simulamos esto:
delete /kafka-simulation/brokers/ids/0

# 🔔 Terminal 1 recibe DOS notificaciones:
# 1. WatchedEvent type:NodeChildrenChanged (de ls -w)
# 2. WatchedEvent type:NodeDeleted (de stat -w)
```

### 🎯 Watcher en mensajes nuevos

#### 🖥️ Terminal 1: Observar partición
```bash
ls -w /kafka-simulation/brokers/topics/ventas/partitions/0/messages
# Esperando mensajes nuevos...
```

#### 🖥️ Terminal 2: Producir mensaje
```bash
# Agregar mensaje (secuencial)
create -s /kafka-simulation/brokers/topics/ventas/partitions/0/messages/msg {"offset":3,"value":"Venta: Monitor $300"}

# 🔔 Terminal 1 recibe instantáneamente:
# WatchedEvent type:NodeChildrenChanged
# Nuevo mensaje detectado!
```

## 🎮 Ejercicio Completo

### 📋 Escenario: Sistema de pedidos de restaurante (3 Terminales)

#### 🖥️ Terminal 1: Configuración inicial
```bash
# Conectar a ZooKeeper
docker exec -it zookeeper zkCli.sh

# 1. LIMPIAR TODO (Opcional)
deleteall /kafka-simulation

# 2. CREAR ESTRUCTURA
create /kafka-simulation ""
create /kafka-simulation/brokers ""
create /kafka-simulation/brokers/ids ""
create /kafka-simulation/brokers/topics ""
create /kafka-simulation/controller ""
create /kafka-simulation/consumers ""

# 3. REGISTRAR 2 BROKERS (Cocinas)
create -e /kafka-simulation/brokers/ids/0 '{"host":"cocina-principal","port":9092}'
create -e /kafka-simulation/brokers/ids/1 '{"host":"cocina-secundaria","port":9092}'

# 4. CREAR TOPIC "pedidos" - ESTRUCTURA COMPLETA
create /kafka-simulation/brokers/topics/pedidos ""
create /kafka-simulation/brokers/topics/pedidos/partitions ""
create /kafka-simulation/brokers/topics/pedidos/partitions/0 ""
create /kafka-simulation/brokers/topics/pedidos/partitions/1 ""

# 5. CREAR NODOS STATE Y ASIGNAR LÍDERES
create /kafka-simulation/brokers/topics/pedidos/partitions/0/state ""
set /kafka-simulation/brokers/topics/pedidos/partitions/0/state '{"leader":0,"isr":[0,1]}'

create /kafka-simulation/brokers/topics/pedidos/partitions/1/state ""
set /kafka-simulation/brokers/topics/pedidos/partitions/1/state '{"leader":1,"isr":[1,0]}'

# 6. ELEGIR CONTROLLER
create -e /kafka-simulation/controller '{"brokerid":0}'
```

#### 🖥️ Terminal 2: Simular pedidos
```bash
# Conectar a ZooKeeper
docker exec -it zookeeper zkCli.sh

# 7. CREAR ESTRUCTURA DE MENSAJES
create /kafka-simulation/brokers/topics/pedidos/partitions/0/messages ""

# 8. ENVIAR PEDIDOS (como producer)
create -s /kafka-simulation/brokers/topics/pedidos/partitions/0/messages/pedido '{"orden":"Pizza Margarita","mesa":5}'
create -s /kafka-simulation/brokers/topics/pedidos/partitions/0/messages/pedido '{"orden":"Pasta Carbonara","mesa":3}'
create -s /kafka-simulation/brokers/topics/pedidos/partitions/0/messages/pedido '{"orden":"Ensalada César","mesa":7}'
```

#### 🖥️ Terminal 3: Monitor en tiempo real
```bash
# Conectar a ZooKeeper
docker exec -it zookeeper zkCli.sh

# 9. CONFIGURAR WATCHERS
ls -w /kafka-simulation/brokers/ids
# Ver: [0, 1]

ls -w /kafka-simulation/brokers/topics/pedidos/partitions/0/messages
# Ver: [pedido0000000000, pedido0000000001, pedido0000000002]

# 10. SIMULAR CONSUMER GROUP
create /kafka-simulation/consumers/camareros ""
create /kafka-simulation/consumers/camareros/offsets ""
create /kafka-simulation/consumers/camareros/offsets/pedidos ""
create /kafka-simulation/consumers/camareros/offsets/pedidos/0 "2"
# Ya procesamos 2 pedidos
```

#### 🖥️ Terminal 2: Simular falla de cocina
```bash
# 11. COCINA SECUNDARIA SE CAE
delete /kafka-simulation/brokers/ids/1

# 🔔 Terminal 3 recibe: WatchedEvent type:NodeChildrenChanged

# 12. REASIGNAR PARTICIÓN 1 A COCINA PRINCIPAL
set /kafka-simulation/brokers/topics/pedidos/partitions/1/state '{"leader":0,"isr":[0]}'
```

#### 🖥️ Terminal 1: Verificar estado final
```bash
# 13. VER ESTADO ACTUAL
ls /kafka-simulation/brokers/ids
# [0] - Solo cocina principal activa

get /kafka-simulation/brokers/topics/pedidos/partitions/0/state
# {"leader":0} - Cocina principal maneja partición 0

get /kafka-simulation/brokers/topics/pedidos/partitions/1/state
# {"leader":0} - Cocina principal también maneja partición 1 ahora

get /kafka-simulation/consumers/camareros/offsets/pedidos/0
# "2" - Camareros procesaron 2 pedidos
```

## 📝 Comandos Útiles de Referencia

### ⚠️ Notas Importantes sobre JSON en ZooKeeper
```bash
# USAR COMILLAS SIMPLES para JSON
create /path '{"key":"value"}'
set /path '{"key":"value"}'

# Si usas comillas dobles, puede dar error de ACL
# INCORRECTO: create /path {"key":"value"}
# CORRECTO: create /path '{"key":"value"}'
```

### Crear Estructura Completa (Padre e Hijos)
```bash
# SIEMPRE crear la estructura completa antes de asignar datos
create /parent ""
create /parent/child ""
create /parent/child/data ""
# Ahora SÍ puedes hacer set
set /parent/child/data '{"info":"value"}'
```

### Tipos de Znodes
```bash
# Crear nodo PERSISTENTE (por defecto)
create /path "data"

# Crear nodo EFÍMERO (desaparece al desconectarse)
create -e /path "data"

# Crear nodo SECUENCIAL (añade número único)
create -s /path "data"
# Resultado: /path0000000001

# Crear nodo EFÍMERO + SECUENCIAL
create -e -s /path "data"
```

### Comandos de Lectura
```bash
# Ver contenido
get /path

# Ver metadata (tipo, permisos, versión)
stat /path

# Listar hijos
ls /path

# Ver ACL (permisos)
getAcl /path
```

### Comandos de Modificación
```bash
# Modificar datos
set /path "new-data"

# Eliminar (solo si no tiene hijos)
delete /path

# Eliminar recursivo
deleteall /path
```

### Watchers (Notificaciones)
```bash
# Observar cambios en hijos
ls -w /path

# Observar cambios en datos
get -w /path

# Observar cambios en metadata
stat -w /path

# NOTA: Watchers son one-time (se disparan una vez)
```

### Verificar Tipo de Znode
```bash
# Usar stat para ver ephemeralOwner
stat /path

# Si ephemeralOwner = 0x0 → PERSISTENTE
# Si ephemeralOwner = 0x17abc... → EFÍMERO
```

### Salir
```bash
quit
```

## 🎯 Resumen

Esta guía muestra cómo ZooKeeper coordina servicios distribuidos:
1. **Detección de servicios**: Brokers se registran/desregistran automáticamente
2. **Elección de líder**: Controller y líderes de partición
3. **Configuración distribuida**: Todos ven los mismos datos
4. **Notificaciones en tiempo real**: Watchers alertan cambios instantáneamente
5. **Tolerancia a fallas**: Reelección automática cuando un nodo cae

¡Ahora entiendes cómo ZooKeeper es el cerebro detrás de sistemas distribuidos como Kafka!
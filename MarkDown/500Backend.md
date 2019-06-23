# Backend

Éste proyecto es completamente dependiente del correcto funcionamiento del sensor que se desarrolla en los fragmentos anteriores en éste documento. Eso explica la razón por la cual hasta ahorita empieza el analisis y la solución para la parte medular del sistema que hará que los conductores sepan en qué lugar se pueden estacionar.

El backend y el frontend fueron desarrollados en paralelo. Para dar la sensación de orden aparentemente cronológico comenzaré con el backend, aquello que pretende comunicar los sensores con los usuarios, sean oficiales o conductores, y al mismo tiempo convertir los datos recopilados en información útil para la toma de decisiones al volante.

## Análisis del backend.

El sistema propuesto consiste de aplicaciones móviles que leen la información de los sensores. Además dichos sensores deben de ser capaces de exponer su información al mundo. Por lo tanto debe haber un ente concentrador de la información de los sensores que además tenga forma de ser consumida por aplicaciones móviles. Es necesario por lo tanto determinar la o las tecnologías a utilizar por parte del backend del sistema. Existen multiples opciones, cada una con sus propios conjuntos de ventajas y desventajas. A continuación se plantean las tecnologias revisadas, sus características particulares y si son aceptadas para su implementación.

Antes de empezar a analizar la tecnología disponible, primero es necesario conocer las características

## Servicios Web

### Transaccionales

El estándar por excelencia en servicios web transaccionales son los APIs basados en una architectura REST. REST se caracteríza por los siguientes aspectos:

- Arquitectura cliente-servidor
- Sin estado
- Capas Intermedias

En general los RESTful APIs se consultan a través de peticiones HTTP en conjunto con una serie de operaciones definidas. En el caso de peticiones HTTP sus operacions son (GET,POST,PUT,DELETE) comunmente se equiparan con las operaciones CRUD (CREATE,READ,UPDATE,DELETE) de las bases de datos.

Los RESTful APIs permiten el desacoplar y aligerar la carga computacional de los clientes. Permite al software del cliente concentrarse en presentar la información al usuario y solamente consultar lo necesario a los web services pertinentes. Además dado que dichos servicios son independientes al estado del cliente, ninguno de los dos entes tiene que recordar el estado de las comunicaciónes anteriores. Finalmente el uso de capas intermedias como balanceadores de carga, que distribuyen las peticiones a multiples servidores permiten una gran escalabilidad al sistema. Finalmente, los servicios transaccionales le permiten al cliente pedir solamente la información que permite, en este sentido la comunicación se genera de forma unilateral.

### Tiempo real

Los servicios web en tiempo real usan el protocolo Web Socket, el cual monta un canal de comunicación sobre una conexión TCP. Dicho canal, al contrario de las peticiones HTTP, permite la comunicación bidireccional entre el cliente y el servidor.

Esto trae la ventaja de que cuando un evento en un servidor, al cual el cliente esta conectado, recibe un evento, pueda comunicarse con el cliente inmediatamente y comunicarle información pertinente. Desafortunadamente los web sockets presentan un reto al momento de escalar la solución.

### Alojamiento de la información

En general cualquier solución necesita guardar información de un mismo contexto en algun lugar para su uso posterior. En las soluciones IOT en general se utilizan 2 tipos de bases de datos, las relacionales y las no relacionales.

### Bases de datos No Relacionales

Las bases de datos no relacionales como CASSANDRA, FIREBASE, MONGODB, buscan maximizar la baja latencia, la velocidad de lectura y la obtención de grandes volumenes de datos. Logran esto al quitar o aflojar algunas de las restricciones que otros tipos de base de datos tienen. Muchas veces, las bases de datos no relacionales, incluso invitan a que la base no sea normalizada para maximizar la velocidad de lectura.

### Bases de datos Relacionales

Las bases de datos relacionales como POSTGRESQL,MYSQL,etc proveen de herramientas que evitan la duplicidad de la información, grantizan la integridad referencial de los registros y favorece la normalización por ser muy comprhensible.

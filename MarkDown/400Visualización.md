## dar de alta y baja rapidamente los sensores de la ciudad

Para determinar el tamaño del proyecto en cuanto a costos, recursos y tiempos en cualquier ciudad, se tienen que responder a las siguientes preguntas. ¿Cuantos sensores se necesitan cubrir los poligonos de parquimetros de cualquier ciudad? ¿Como se identifican los sensores y donde van?

### ¿Cuantos sensores se necesitan?

Para saber cuantos sensores se necesitan puntualmente, se necesita mucha información. Se necesita saber qué calles tendrán parquimetros sensorisados, su longitud y se deberá saber si por ambos lados de la vialidad. Además se necesita conocer qué tramos son usados como estacionamiento, que tramos son accesos vehiculares y claro en qué tramos está prohibido dejar el automovil. Con toda ésta información hacer un cálculo preciso de la cantidad de sensores requeridos.

La formula aprentemente sencilla resulta en:

$$
(Lt-Lx)/K
$$

Donde Lt es la suma de la longitud de las calles, Lx la suma de la longitud de los tramos no utilizables y K la longitud de un espacio para coche.

En la práctica conocer la longitud de los tramos no utilizables resulta pragmaticamente imposible. La banqueta cambia constantemente, nuevas edificaciones se crean, se cierran accessos vehiculares, se crean rampas para gente con capacidades diferentes, etc. Contar con ésta información al día resulta titanica e inviable.

Las cosas que sí conocemos son la longitud total de las calles y la longitud de un cajón de estacionamiento. Con esto dar una cota superior razonable es posible.

El Instituto Nacional de Estadistica y Geografía (INEGI) tiene la cartografía vial de todo el país en archivos shape (.shp). Dentro de éstos archivos podemos encontrar las calles descritas por lineas rectas unidas por nodos
(TODO MOSTRAR IMAGEN EJEMPLO)
. Dichos nodos tienen como propiedad su latitud y longitud. Utilizando sencillamente la formula de distancia sobre una esfera se puede calcular la longitud total de las calles dentro del poligono de polanco.

TODO PONER LA FORMULA DE DISTANCIAS SOBRE ESFERAS.

$$
a = sin²(Δφ/2) + cos φ1 ⋅ cos φ2 ⋅ sin²(Δλ/2)
$$

$$
c = 2 ⋅ atan2( √a, √(1−a) )
$$

$$
d = R ⋅ c
$$

TODO OBTENER LONGITUD COMPLETA PARA POLANCO.

Ya que tenemos la longitud total para polanco, ahora solamente tenemos que multiplicar x2 para representar ambos lados de la calle que son sensorizables y dividir por 6 metros que es la longitud de un cajón para automovil.

### Como se identifican los sensores y donde van

El siguiente paso para el proyecto, es determinar donde van a estar ubicados los sensores y como van a ser identificados, lo cual será de vital importancia para varias tareas en la solución propuesta. Las labores principales serán las siguientes:

Mostrar cada sensor en su ubicación geográfica.
Poder determinar el área donde se depositó el vehiculo y así por un lado determinar si le corresponde multa al vehiculo, por otro lado, realizar el pago correspondiente.

Utilizando la información de los nodos de las calles de INEGI, ahora determinaremos la ubiación geográfica aproximada de cada sensor posible. Una estrategia sencilla que surge es dividir en secciones de 6 metros cada tramo de avenida definida por 2 nodos y guardar de cada sección su latitud y longitud. El par de nodos representan la linea central de la calle por lo que habrá que situar los sensores en los costados, donde se estacionan los coches.

**TODO Imagen de par de nodos sobre mapa**

Como podemos observar en la imagen anterior las calles varían en anchura, por lo que asumiremos un ancho mínimo de 5 metros para simplificar el problema y colocarlos a 2.5 metros de la linea central de forma perpendicular como se muestra a continuación.

**TODO Imagen de una linea recta dividida por 6 metros**

La forma de poner las dos filas de sensores a los costados de la linea central es con la formula sencilla de un plano cartesiano donde simplemente se invierte la pendiente de una recta en este caso denotado por 2 puntos geográficos. Esta nueva linea recta es perpendicular a la original con intersección en cada uno de las divisiones de 6 metros anteriores. un simple cálculo nos permite conocer las ubicaciones precisas a 2.5 metros de la linea central.

Ésta simplificación es posible ya que México está alejado de los polos, lo que ocasiona que los efectos de apartamiento de las latitudes sean despreciables. De esta manera podemos tratar la superficie terrestre como un plano.

## Visualización de los sensores.

La aplicación de **SPOTS** tiene como requerimiento permitir que un usuario que está buscando lugar de estacionamiento desde su casa pueda navegar fácilmente a la ubicación destino y con información clara tomar una decisión de donde se va a estacionar.

Conociendo que el número de sensores para cubrir los espacios de ecoparq de la ciudad de méxico ronda en los 100,000 surge un problema importante.¿Como mostrar la información de tantos elementos en un mapa de forma entendible y valiosa?

Para ejemplificar dicho problema en una escala menor, usaré como ejemplo un app de movilidad que tiene ciertas similitudes.

Ecobici tiene un app en el cual uno puede observar todas las estaciones, en teoría en tiempo real se puede observar cuantas bicicletas tiene cada estación y cuantos lugares disponibles para el depósito de las mismas. A continuación presento el una imagen tomada por la aplicación en uso en marzo 2019.

![Mapa de ecobici](images/mapaEcobici.png)

El mapa es claramente imposible de navegar, no se reconocen áreas geograficas por la cantidad abismal de objetos en él. Encontrar un área se hace por medio de prueba y error, además de que no provee de información útil en este momento.

![Mapa de ecobici](images/mapaEcobici.png)

Una vez que nos acercamos se entiende el mapa un poco más y la información que se transmite por el canal del color tiene más sentido.

El problema por lo tanto disminuye entre menor distancia aparezca en el mapa y aumenta conforme se aleje uno.

Una solución clara es la implementación del _clustering_.
Existen varios ejes de ataque, como agrupar por colonia. Para lograr esto se puede usar la información de Inegi para conseguir los poligonos de cada colonia y agrupar los sensores por su ubicación geográfica.

Otra forma de llevar a cabo las agrupaciones y que naturalmente surge como solución es el uso de una estrategia de k-medias. Dicho algoritmo lo que hace es un proceso iterativo que genera k centros y va agrupando los elementos más cercanos a dicho centro, recalculando los k centros, etc.

Aunque el algoritmo de los k-medias no asegura un resultado óptimo, es un excelente resultado muy sencillo de implementar.

Podemos observar el producto del algoritmo a continuación.

![Mapa de ecobici](images/mapaEcobici.png)

Notoriamente vemos un panel mucho más limpio.

Este proceso fue repetido 3 veces para obtener agrupaciones a distintos acercamientos del mapa. En el nivel más alto de zoom, la información de los sensores individuales se mantiene para que el usuario que busque un cajón de estacionamiento pueda tomar una decisión con la mayor cantidad de información posible.

Para la aplicación de los conductores la información que se muestra dentro de los clusters indica cuantos lugares se encuentran disponibles.

En contraste la información que se le muestra a los elementos de transito encargados de infraccionar a los vehiculos morosos, sería de cuantos coches están estacionados en una calle sin haber pagado.

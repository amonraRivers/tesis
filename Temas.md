# Temas
## Cobros 
## Temperatura del sensor
## detectar la huella de los coches
## Transmitir la informacion en tiempo real a todos los dispositivos.
## Real Time Web Sockets
## Transmisiòn de la informaciòn
## Diagrama del sistema

## dar de alta y baja rapidamente los sensores de la ciudad

Para determinar el tamaño del proyecto en cuanto a costos, recursos y tiempos en cualquier ciudad, se tienen que responder a las siguientes preguntas. ¿Cuantos sensores se necesitan cubrir los poligonos de parquimetros de cualquier ciudad? ¿Como se identifican los sensores y donde van? 
### ¿Cuantos sensores se necesitan?
Para saber cuantos sensores se necesitan puntualmente, se necesita mucha información. Se necesita saber qué calles tendrán parquimetros sensorisados, su longitud y se deberá saber si por ambos lados de la vialidad. Además se necesita conocer qué tramos son usados como estacionamiento, que tramos son accesos vehiculares y claro en qué tramos está prohibido dejar el automovil. Con toda ésta información hacer un cálculo preciso de la cantidad de sensores requeridos.

La formula aprentemente sencilla resulta en: 

(Lt-Lx)/K

Donde Lt es la suma de la longitud de las calles, Lx la suma de la longitud de los tramos no utilizables y K la longitud de un espacio para coche.

En la práctica conocer la longitud de los tramos no utilizables resulta pragmaticamente imposible. La banqueta cambia constantemente, nuevas edificaciones se crean, se cierran accessos vehiculares, se crean rampas para gente con capacidades diferentes, etc. Contar con ésta información al día resulta titanica e inviable. 

Las cosas que sí conocemos son la longitud total de las calles y la longitud de un cajón de estacionamiento. Con esto dar una cota superior razonable es posible.

El Instituto Nacional de Estadistica y Geografía (INEGI) tiene la cartografía vial de todo el país en archivos shape (.shp). Dentro de éstos archivos podemos encontrar las calles descritas por lineas rectas unidas por nodos 
(TODO MOSTRAR IMAGEN EJEMPLO)
. Dichos nodos tienen como propiedad su latitud y longitud. Utilizando sencillamente la formula de distancia sobre una esfera se puede calcular la longitud total de las calles dentro del poligono de polanco.

TODO PONER LA FORMULA DE DISTANCIAS SOBRE ESFERAS.
TODO OBTENER LONGITUD COMPLETA PARA POLANCO.

Ya que tenemos la longitud total para polanco, ahora solamente tenemos que multiplicar x2 para representar ambos lados de la calle que son sensorizables y dividir por 5 metros que es la longitud de un cajón para automovil.

#### Sacar longitud para polanco

### Como se identifican los sensores y donde van

El siguiente paso para el proyecto, es determinar donde van a estar ubicados los sensores y como van a ser identificados, lo cual será de vital importancia para varias tareas en la solución propuesta. Las labores principales serán las siguientes: 

Mostrar cada sensor en su ubicación geográfica.
Poder determinar el área donde se depositó el vehiculo y así por un lado determinar si le corresponde multa al vehiculo, por otro lado, realizar el pago correspondiente.

Utilizando la información de los nodos de las calles de INEGI, ahora determinaremos la ubiación geográfica aproximada de cada sensor posible. Una estrategia sencilla que surge es dividir en secciones de 6 metros cada tramo de avenida definida por 2 nodos y guardar de cada sección su latitud y longitud. El par de nodos representan la linea central de la calle por lo que habrá que situar los sensores en los costados, donde se estacionan los coches.

TODO Imagen de par de nodos sobre mapa

Como podemos observar en la imagen anterior las calles varian en anchura, por lo que asumiremos un ancho minimo de 5 metros para simplificar el problema y colocarlos a 2.5 metros de la linea central de forma perpendicular como se muestra a continuación. 

La forma de poner las dos filas de sensores a los costados de la linea central es con la formula sencilla de un plano cartesiano donde simplemente se invierte la pendiente de una recta en este caso denotado por 2 puntos geográficos. Ésta simplificación es posible ya que México está alejado de los polos, lo que ocaciona que los efectos de apartamiento de las latitudes sean despreciables. De esta manera podemos tratar 

Ahora bien, dado que las calles tienen cualquier dirección para poder determinar






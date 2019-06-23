## Designación del sensor a utilizar

Uno de los requerimientos fundamentales de éste desarrollo es poder conocer en tiempo real si un cajón de estacionamiento está siendo utilizado.

Para ello evidentemente, el primer paso es detectar un vehículo. Existen muchas soluciones implementadas incluso el día de hoy. Las más conocidas son, soluciones con sensores infrarrojos, magnéticos, sónicos, visuales.

Las cámaras pueden ser utilizados para detectar vehículos, ejemplos claros de ésto son las camaras de velocidad que se usan para generar infracciones. Dichas cámaras normalmente vienen acompañadas de un radar que és el que hace la detección. Sin embargo se puede hacer análisis de imagenes para así detectar coches.

Los sistemas infrarrojos los podemos encontrar en accesos de peaje como los del segundo piso del anillo periférico en la Ciudad de México. Dichos sensores activan los lectores activos de peaje que hacen cobros. Para su instalación normalmente se utilizan dos partes, un emisor de luz infrarroja y un receptor de la misma. Cuando un objeto interrumpe la conexión entre ambas partes, se efectúa una acción. En el caso del sistema de peaje, el lector de rfid se enciende y monitorea al vehículo que está ingresando.

Las soluciones sónicas constan en que el emisor y el receptor se encuentran en el mismo lugar. El sistema más conocido, que normalmente puede ser encontrado en centros comerciales colgados de los techos, rebotan la señal al suelo cada determinado tiempo. Cuando la señal choca contra un objeto, el tiempo que toma la señal en regresar es medida. El sensor se calibra para considerar una determinada distancia como base. Cuando un objeto genera un tiempo de llegada menor, el sensor efectúa una acción. En el caso de las plazas,prende la luz roja.

Las soluciones magnética, tratan de un sistema que mide el campo magnético en el cual se encuentra. Elementos ferro-magnéticos generan perturbaciones en el campo magnético de los sensores y así detectan metal. Es así como las plumas de acceso de los centros comerciales operan. Se abren con una entrada manual, ya sea retirar un boleto o con el ingreso del mismo ya pagado. La pluma se cierra una vez que detectó el paso de metal.

De los tres sistemas descritos, los tres tienen ventajas y desventajas analizadas posteriormente. Al analizar los diferentes métodos, obtuvimos el grupo de los no viables, y aquellos capaces de cumplir con los requerimientos.

### Sistemas no viables

Las cámaras tiene la ventaja clara en cuanto a la cantidad de información que pueden recopilar. Detectar coches no es dificil con ellas, sin embargo sufren de graves problemas que incumplen con los requerimientos establecidos previamente. Necesitan mucha infraestructura para su colocación, son altamente visibles y susceptibles al vandalismo. Están expuestas a la intemperie y cualquier interferencia en su campo visual puede generar lecturas incompletas.

El sistema infrarrojo goza de tener una muy alta precisión. Sin embargo el hecho de que requiera la utilización de dos equipos en lugares apartados es un factor determinante en la decisión de no utilizarlos como medio de detección vehicular en la vía pública. Un segundo factor decisivo es que cualquier objeto que interfiera con la recepción de la luz, un peatón, un ave, haría que nuestro sistema diera falsos positivos.

Los sensores de sonar, de forma similar a los infrarrojos tienen un grave problema de instalación. Se puede pensar que la instauración de los sensores es muy sencilla dado que la ubicación del emisor y receptor es la misma. El problema surge si al intentar aprovechar la infraestructura existente, se montara el sensor en el pavimento debajo de un vehículo apuntando hacia arriba se lidiaría con el problema de que cualquier objeto que le caiga encima, lluvia, hojas, basura, etc, ocasionaría falsos positivos. Es por ésta misma razón que vemos los sensores puestos solamente en plazas con estacionamiento techado. Postrar los sensores en un lugar elevado, es muy costoso, visualmente contaminante y claramente no acorde a los requerimientos previamente mencionados. Resulta importante mencionar así mismo que incluso con la instalación necesaria, existirá un número de falsos positivos menor, pero existente por cualquier objeto con suficiente volumen, por ejemplo una persona qué se encuentre en el rango de detección de las sondas.

### Sistemas viables

El sensor magnetico puede detectar metal sin tener linea de visión directa. Esto quiere decir que puede estar debajo del pavimento y detectar objetos ferro-magnéticos en la superficie de la vía publica. Por lo tanto cumple con una instalación sencilla, visualmente es no contaminante, el vandalismo es minimizado al igual que el deterioro por condiciones climáticas. Finalmente el número de falsos positivos, aunque existente, es decisivamente menor que con cualquiera de los otros métodos.

## Primera iteración

Dadado el análisis de los sistemas de detección presentado anteriormente, aunado a que solamente un sistema es viable para los requisitos del proyecto, es elegido el sensor magnético para la detección vehicular de éste proyecto.
Una vez determinado el tipo de medición a utilizar, se hizo una búsqueda rápida de circuitos integrados para hacer la prueba de concepto.

En la elección del microchip, se tomó en cuenta el costo como factor principal a considerar. Por lo tanto, elegir el modelo XXXXXX resultó lógico.

Dicho microchip fue puesto en una protoboard y conectado una raspbery. Dicha raspbery ejecuta un programa que prende el sensor y toma entre 1 y 1000 mediciones por segundo dependiendo de un parámetro. De tal suerte que desde una computadora conectada por comm a la raspbery, se podían leer y graficar en tiempo real las mediciones.

Un ejemplo que se presenta a continuación denota la lectura de un vehículo.

¡Es muy notorio el momento en el que empieza a pasar el carro y el momento en que termina de pasar!

A pesar de la grán alegría que esto trajo, surge un problema muy notorio que hace prácticamente imposible la detección fidedigna de un coche. Al terminar de pasar, el sensor termina con un _offset_ a veces positivo y a veces negativo de una magnitud variable. Esto hace prácticamente imposible la detección fiel de un vehiculo. Haciendo una investigación más a fondo del comportamiento de los sensores magnéticos, resultó que el culpable es la histéresis.

## Histeresis.

La histéresis es el fenomeno en donde el estado actual de un sistema depende de su pasado, de su historia. En el caso magnético, al haber una perturbación en el campo magnético de un sensor, dicho dispositivo sufre una magnetización que resulta en una lectura de un campo magnético modificado permanentemente.

El offset que detectabamos era resultado de ésta histéresis. Para resolver éste problema tuvimos que cambiar el chip de efecto hall a uno magnetoresistivo que tiene las compensasiónes necesarias para deshacerse de los efectos de la histeresis.

## Segunda iteración

En la segunda versión se optó por un sensor XXXXX, el cual tiene de fábrica todas las compensasiones necesarias para eliminar la histéresis de su nucleo ferro-magnetico.

Al igual que en la primera versión, se montó el chip en una protoboard conectada al shield de una raspberry, la cual conectada a una computadora grafíca en tiempo real los valores producidos por el sensor.

**TODO MOSTRAR MEDICIONES.**

Las diferencias principales entre la primera versión y la segunda son muy notorias. En primer lugar, existen 3 lineas graficadas en lugar de 1 y lo más importante, una vez que terminan de pasar los automoviles, la histeresis es nula y los valores regresan a su valor original.

Con éste resultado, el experimento de dejar el sensor un día a la intemperie en una entrada de un multifamiliar tomó lugar. Las condiciones eran relativamente controladas, el sensor no podría ser atropellado por los carros que ingresan y salen. Se esperaba entonces un resultado de 100% de efectividad en la detección. Despues de analizar multiples veces la información, se detectaron todos los vehículos que pasaron, además de falsos positivos muy interesantes.

Para la solución, como en cualquier sistema de detección, resulta de vital importancia minimizar los falsos positivos y los falsos negativos.

En el experimento que se realizó se tomaban 30 muestras por segundo del sensor. Graficar ésto con resolución completa se vió de la siguiente manera.

**TODO MOSTRAR MEDICIONES.**

La forma de atacar esté problema fue primero quitando las mediciónes que sabemos son de coches. La segunda acción fue tomar una medición de cada 5 minutos para observar si existía histeresis que no había sido compensada. Dicha gráfica se muestra a continuación.

**TODO MOSTRAR MEDICIONES.**

En este momento se vé que existe una clara variación en la lectura de los sensores. Mi hipótesis fue que el problema era la temperatura ya que la variación se asemejaba a una gráfica senoidal coincidiendo con la variación de la temperatura de un día.

## Temperatura del sensor

En días posteriores a realizar la prueba, junto con la intuición de que los falsos positivos se deben a una variación de la sensibilidad causada por la temperatura, se llevan a cabo una serie de experimentos para corroborar la teoría.

Es conectado un sensor de calor al mismo shield en el cual se encuentra el dispositivo electromagnético y posteriormente se introducen ambos sensores a una cámara aislada. Se introduce una pistola de calor que sirve para desoldar circuitos integrados de PCBs.

Las condiciones de temperatura extrema son simuladas de manera controlada, ya que la pistola de calor tiene controles precisos y el chip de sensado de temperatura nos informa la temperatura actual.

Muestro a continuación la información del primer experimento a continuación

**TODO MOSTRAR MEDICIONES**

Claramente es observada la correlación que confirma la teoría. En ésta situación se tiene que encontrar una manera de eliminar el efecto de la temperatura. Esto debido a que la variación de temperatura en el distrito federal va de 0 - 70 grados centígrados, lo que podría ocasionar la generación de información falsa en la ocupación de cajones de estacionamiento.

La manera de resolver ésto es utilizando un par de funciones que tiene el circuito integrado llamadas SET/RESET Con ellas se puede remover el error asociado con el cambio de offset en función a la temperatura. Lo que hacen dichas funciones es invertir la polaridad magnñetica en los elementos de sensado dentro del circuito mismo.

El algoritmo es muy sencillo, pero resulta de vital importancia para el desarrollo presentado. El primer paso es ejecutar la función SET, esto posiciona la magnetización interna en la dirección del campo SET. Se realiza una lectura, dicha lectura contiene no solo la medida de la respuesta del sensor al campo magnético al que está expuesto, pero tambien contiene un OFFSET que llamaremos H. En otras palabras:

$$
Lectura1=H+OFFSET
$$

Posteriormente se ejectua la funcion RESET, lo que cambia la dirección de la magnetización de los resistores de sensado en la dirección opesta al SET. Entonces se hace una lectura que nos provee al igual que en el caso anterior de dos elementos, el primero es el OFFSET y el segundo la misma respuesta al campo magnético al que se encuentra sometido pero con el signo invertido, de tal manera que

$$
Lectura2 =-H+OFFSET
$$

Con este sistema de ecuaciones obtenemos el OFFSET y el valor de H que es usada para la medición final.

$$
OFFSET=(Lectura1+lectura2)/2
$$

$$
H=Lectura1-OFFSET
$$

Con ésta sencilla corrección es puesta en marcha otra prueba a la intemperie, de 24 hrs, la cual consigue los resultados que se tienen a continuación.

**TODO mostroar Datos**

Los resultados son muy alentadores, 0 falsos positivos, 0 variación en el estado base de los sensores y un 100% de detección de vehículos.

# Analisis del problema.

Antes de poder definir lo que es esperado de un sistema de monitoreo en tiempo real de los cajones de estacionamiento de una ciudad, cabe desmenuzar el sistema actual de ecoparq para conocer sus flaquezas y poder proponer una solución integrál que tenga como objetivo final mejorar la movilidad en la ciudad.

## Actores

En primer lugar se busca entender cuales son los actores del sistema actual y cuales son sus funciones.

El actor más evidente es el conductor que está buscando donde estacionarse. Dicho conductor genera tránsito entre más tiempo esté merodeando la zona en la cual quiere encontrar lugar. Es reportado que el 30% del transito en los lugares más conflictivos se produce por éstos. El conductor es responsable de pagar su boleto de parquimetro y de situarlo en el tablero del vehículo de modo visible. En su caso tambíen tiene que cubrir el costo de la multa y el retiro de la "araña" en caso de ser infraccionado por el sistema ecoparq.

Las empresas se encargan de instalar los sistemas físicos que proveen de boletos, cobrar por el tiempo de estacionamiento y entregar el dinero a Gobierno.

Los policías y miembros de ecoparq se dedican a rondar los poligonos de parquimetros en busca de automoviles morosos, que no hayan pagado o que hayan inclumplido en colocar el boleto en el tablero del coche de forma visible. Son responsables de colocar los inmovilizadores de coches y de retirarlos una vez que se hayan cubierto las sanciones económicas correspondientes a la multa y al retiro de inmovilizador.

El gobierno tiene como función recaudar el dinero pagado por los conductores y destinar el 30% a obra pública y a la recuperación del espacio público.

## Requerimientos

Ya que se tiene una idea más clara de quienes actuan en el sistema y la manera en que interactuan, es hora de encontrar cuales son los puntos débiles más comunes en el aspecto operativo de el sistema ecoparq y más alla, de estacionarse dentro de las zonas más con las vias más disputadas en cuestión de estacionamiento. De esta manera proveer de una solución que mejore de manera considerable la operación de dichos espacios.

## Requerimientos del sistema para conductores.

La forma más sencilla de conocer los problemas más comunes por parte de los usuarios es con una serie de entrevistas con los conductores.

En entrevistas verbales con los usuarios de ecoparq, se encuentran los siguientes puntos.

- Tuve que salir de mi edificio para pagar el parquímetro
- Tuve que cambiar un billete para pagar el parquímetro
- Tardé mucho en encontrar lugar.

Como se vé, los primeros 2 puntos se refieren a las complicaciones que tienen las personas al pagar el parquímetro. Por lo tanto el sistema propuesto requiere que los pagos se hagan desde un lugar remoto. Al mismo tiempo, el sistema debe poder aceptar pago con tarjetas de crédito.

De forma menos sutil, el tercer punto se refiere a un problema de desconocimiento. Dicho problema alude a que cuando un conductor llega al área cercana a su destino, la única información con la que cuenta para tomar una decisión es lo aquella que le provee la calle sobre la que se encuentra. Esto es áltamente problemático ya que resulta aleatorio o "suerte" encontrar un lugar libre. Han habido ocaciones en mi experiencia personal donde estacionar el coche en la calle toma 40 minutos.

Por lo tanto resulta imperativo el requerimiento poder saber en tiempo real la disponibilidad y ocupación de las calles de forma remota.
Además, ésta información debe ser accesible a los ocupantes de un vehículo en movimiento.

## Requerimientos del sistema para policías.

En entrevistas con los oficiales de transito y miembros de ecoparq encargados de multar y colocar las "arañas", en realidad no mencionan ninguna queja. En cuanto a la respuesta que dan al preguntar sobre la estrategia seguida para encontrar vehículos morosos es muy interesante. Simplemente recorren las calles, revisando "papelitos" en los autos y multando a quien encuentran.

Resulta alarmante la estrategia que utilizan. Es cuestión de alatoriedad el que se encuentre a los conductores que ya sea intencionalmente o por descuido dejan de pagar el parquimetro sean encontrados. Además se incentivan las mafias donde la gente se ponga de acuerdo con los vigilantes de los cuadrantes de ecoparq para no ser multados y así cometer corrupción sin conocimiento del gobierno. El problema más importante para la operación de los parquímetros, al igual que con los conductores resulta ser el desconocimiento. El tener que revisar manualmente y físicamente un papel para determinar quienes faltan a sus obligaciones en las áreas de parquímetro.

Por lo tanto, para los oficiales, la solución debe determinar la ubicación aproximada de los vehículos que no hacen su pago y presentarla en tiempo real. Al mismo tiempo debe poder distinguir entre un vehiculo con tiempo vigente y pagado, de uno ausente de pago.

Dentro del alcance de este proyecto solamente no se pretende analizar las complicaciones gubernamentales o administrativas del sistema de parquimetros.

## Requerimientos del sistema en vía pública.

En vista de que el problema operativo más grande es la falta de información, el sistema que se propone debe poder determinar de alguna manera la ubicación de los vehiculos que ocupan cajones de estacionamiento. Por un lado para que los conductores sepan que puntos están desocupados y tomar una decisión de a donde dirigirse para encontrar lugar con mayor probabilidad. Del otro lado, a los oficiales, les permite tomar una mejor decisión de a donde dirigirse para poner multas y los inmovilizadores.

Para lograr ésto, un sistema de sensado debe ocuparse y así discernir qué cajones se encuentran accesibles para los conductores ansiosos por arribar.

Los problemas más comunes a la hora de instalar un sistema de sensado, son el vandalismo, la intemperie y errores en la lectura.E l vandalismo como en cualquier ciudad del mundo es un problema en la Ciudad de México, hecho que se refleja en las paredes pintadas de grafiti, letreros rallados. Así tambien con aspectos tecnológicos encontramos el robo de cobre e incluso la destrucción de parquimetros.

Es por esto que el requerimiento es que el sistema de sensado tenga el poco o nulo impacto visual. Así mismo, la poca exposición del aparato de sensado a la calle lo cuidará del medio ambiente. De tal suerte que se cuide la inversión de infraestructura de forma natural lo más posible y así alargar la vida util de los dispositivos.

El método de sensado que se elija tiene que ser capaz de comunicar a un _API_ en internet la ocupación de su cajón asignado. Y al hacerlo debe cometer la menor cantidad de errores posibles. Cualquier sistema no es 100% a prueba de fallas pero debe procurar aspirar a serlo. El requerimiento es que en el _MVP_, las lecturas tengan una confianza de mínimo el 95%.

## Requerimientos del sistema para gobierno.

La transparencia es algo que se debe fomentar y que mejor manera de hacerlo utilizando un lugar donde se puede ver en tiempo real la ocupación, las recaudaciones del día y las multas levantadas. Además el poder exponer al público dichos números.

**TODO mejorar esta parte**

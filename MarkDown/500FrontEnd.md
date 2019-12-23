# Frontend

Éste proyecto es completamente dependiente del correcto funcionamiento del sensor que se desarrolla en los fragmentos anteriores en éste documento. Eso explica la razón por la cual hasta ahorita empieza el analisis y la solución para la parte frontal del sistema que hará que los conductores sepan en qué lugar se pueden estacionar.

El backend y el frontend fueron desarrollados en paralelo. Para dar la sensación de orden aparentemente cronológico comenzaré con el frontend, aquello que se le presenta al usuario que le permite realizar toma de decisiones al volante de manera rápida y segura.

Las principales interacciones que tienen los usuarios con éste proyecto ocurren únicamente en tres lugares independientes.

El lugar más importante para éste proyecto donde existe interacción humana es en los celulares de los conductores.
En segundo termino, en algún dispositivo movil para las personas encargadas de hacer la revisión y las multas de los parquímetros.
El tercero es en cualquier dispositivo electrónico, para la gente responsable del sistema ECOPARQ ya sea gobierno y/o empresa privada.

Teniendo en mente que cada sección del proyecto, conductores, oficiales, oficinista tiene requerimientos y casos de uso distintos e independientes uno del otro, la decisión de crear 3 soluciones independientes en el front end es tomada.

Para poder llevar a cabo los tres desarrollos pertinentes, es necesario hacer mucha labor de planeación, ya que de ella se desprenden requerimientos tecnológicos que deberán ser satisfechos para poder considerar el éxito de los mismos. Dentro de ésta planeación, primero son identificados los casos de uso más relevantes en solución. Las vistas y en de necesitarlo, la tecnología ocupada para completar cada caso de uso.

Posteriormente, dependiendo de los requerimientos, corresponde hacer un análisis de la technología que se encuentra disponible y tomar una decisión de qué usar.

# Análisis de tecnología disponible

El objetivo es conseguir una aplicación móvil para Android u IOS que nos permita mostrar la información recopilada por la labor de sensado y procesamiento llevada a cabo en otras áreas del proyecto. A continuación presento los beneficios y problemas que pueda presentar el desarrollo para cada una de las plataformas de tal manera que al conjugar dichas características, establezca la prioridad de desarrollo.

En ambos casos la primer labor es establecer el ambiente de desarrollo nativo y los requerimientos necesarios para el mismo. Es de vital importancia ya que podrían existir necesidades de hardware o software especificas que pudieran presentar un obstáculo. Finalmente se presentaran opciones de desarrollo no nativo que toman fuerza a partir del 2017.

## Nativo

El programar de manera nativa una solución como ésta permite elegir solamente un sistema operativo sobre el cual se va a desarrollar ya que existen recursos muy limitados como lo es un grupo de tres programadores.

### Android

Los lenguajes en los que se puede desarrollar para android es en java y en kotlin. Programar se lleva a cabo dentro de un IDE llamado Android Studio. Éste software nos permite elegir distintas versiones del API de Android así como crear,administrar y correr emuladores de telefonos celulares y tabletas. Cabe destacar que con el Android Studio y un dispositivo movil real se puede cargar el App directo a un celular Android sin pasar por la tienda y realizar pruebas.

Un beneficio muy importante de Android es que puede ser desarrollado en cualquier sistema operativo, Windows, Linux y MacOs, sin restricción.

### IOS

En el caso de IOS los lenguajes son Objective C o Swift. En éste caso es pertinente programar en MacOS ya que no se permite en ningún otro SO. ésta es una restricción importante. IOS utiliza el IDE Xcode que permite programar, crear y administrar simuladores de teléfonos IOS etc.

Por suerte para el desarrollo, se tenía el acceso a las computadoras mac necesarias para llevarlo a cabo estaban disponibles.

## MultiPlataforma

En años recientes, empezaron a generarse plataformas de desarrollo móvil con características muy similares a aquellas del desarrollo web. El lenguaje preferido Javascript con estilos CSS y un layout XML al estilo HTML. Los principales competidores son Vue Native, Ionic y React Native

### Ionic y Cordova

Ionic en conjunto con cordova presentan una solución Hybrida-Web en la cual se utilizan elementos web para crear el ambiente de la interfáz de usuario. Esto quiere decir en movil las vistas de las aplicaciones que usan ésta solución se dibujan sobre una "**webview**" y utilizan elementos html.

Las ventajas son importantes.

- Consistencia de diseño.
- Portable
- Personalizable

La consistencia de diseño se refiere a que cualquier elemento visual creado en Ionic funciona para cualquiera de las plataformas (Ios,Android, Progressive web-app, web). Sumamente útil ya que no es necesario reescribir o modificar código para que las aplicaciónes se vean iguales.

La portabilidad se referiere a que las aplicaciones desarrolladas con Ionic funcionan en cualquier systema operativo que haga uso de elementos estandarizados web. En la actualidad, cualquier dispositivo hace uso de ellos. Ya sea en la forma de navegadores web o vistas web.

La personalización se logra usando los sistemas web tradicionales como: css general ó css por plataforma, y elementos web como \<div>.

### React Native y Vue

Vue y React Native son una respuesta Híbrida-Nativa en el cual se tienen componentes en este caso JavaScript mappeados a elementos nativos de cada plataforma en específico.
Un ejemplo de ésto es que al dibujar texto en la pantalla de una aplicación móvil, el codigo se transforma en un **TextView** para android y en un **UIView** para Ios. Ésto implica que en vez de compartir componentes a través de multiples plataformas como en Ionic, se está compartiendo código.

La situación descrita implica que aunque se comparte la grán mayoría de componentes visuales. Hay situaciones en las que modificar el diseño de ciertos componentes que usan elementos nativos (eg. el botón de atrás en la navegación nativa) se vuelve muy dificil y/o muy tardado. Por lo tanto no se tiene una consistencia de diseño al 100%

Al mismo tiempo, el que sea parte de la solución tener funciones nativas mappeadas a funciones javascript hace que el nivel de portabilidad se encuentre restringido solamente a los sistemas soportados, a diferencia de Ionic que se basa en una capa web soportada por todos los sistemas operativos.

La grán ventaja que tiene una solución multiplataforma como React Native y Vue es que la experiencia de usuario es mucho más cercano a un app nativa sin llegar a serlo. Así mismo, el desempeño es mucho mejor que la solución Hybrida-Web.

## Conclusión de análisis

Tomando en consideración las ventajas de cada una de las opciones, la tecnología con la que es desarrollado el proyecto es React para el panel Web y React-Native para las aplicaciones móviles

# Solución para Conductor

La solución para el conductor cuenta con los casos de uso más importantes del proyecto dado que es su interacción con el desarrollo del sensor la que da vida a éste trabajo.

Mas allá de ser usuario habitual del sistema de parquímetros de la ciudad de méxico, es importante entender cuales son los **triggers** que llevan a que una persona a utilizar un sistema dado y cuáles son las necesidades que se necesitan cubrir.

Las necesidades más importantes que se descubrieron mediante las entrevistas realizadas dentro de los poligonos de ecoparq, fueron las siguientes: "Tuve que salir de mi edificio para pagar el parquímetro"
"Tuve que cambiar un billete para pagar el parquímetro." y "Tardé mucho en encontrar lugar".

De éstas, con una ligera ayuda de la razón desprendemos las situaciónes en las que el sistema actual (parquimetros físicos) genera una reacción ya sea emocional o de llevar a cabo una acción en las personas.

Al analizar "Tuve que salir de prisa de mi edificio para pagar el parquimetro" podemos encontrar que ésta aseveración trae consigo un escenario muy interesante. El tiempo pagado por el usuario para hacer uso de la calle está por llegar a su límite, si no es que yá lo superó. La situación sugiere que el usuario no era consciente de cuanto tiempo disponía para realizar su siguiente pago. La acción desencadenada que se manifiesta como el traslado del usuario físicamente de su edificio a su vehículo nos abre un área de oportunidad.

Ésta circunstancia podría evitarse de dos maneras.Desde el punto de vista de la aplicación, el primer remedio es de una forma pasiva y la segunda evidentemente activa. El primer escenario es que el usuarió desde la ubicación en la que se encuentre pueda revisar la hora de expiración de su parquimetro. La segunda es que se le envíe una notificación al usuario ,tomando en cuenta un timpo justo, de que su tiempo está por expirar. De éste simple análisis surgen, como se puede apreciar, dos casos de uso. **Como conductor quiero revisar la situación actual del parquímetro que tengo en uso** y **Como conductor quiero poder generar recordatorios de expiración de mi parquímetro**.

Luego toca el análisis de "Tuve que cambiar un billete para pagar el parquímetro". Aquí podemos discernir un par de situaciones. En primera instancia, el pago del parquímetro tiene un cierto grado de dificultad. Solo acepta monedas, no dá cambio y tiene que suceder en el aparato físico. Además para las personas especialmente minusiosas es prácticamente imposible llevar un registro histórico ya que el boleto es frágil, pequeño y de papel. Las dificultades presentadas anteriormente abren la posibilidad para nuestra solución ya que lograr un pago sencillo, remoto es un trigger muy importante. Es así como obtenemos otros dos casos de uso. **Como conductor quiero poder realizar un pago electrónico de forma remota.** y **Como conductor quiero revisar el historial de pagos en el parquímetro**.

Finalmente podemos indagar la tercera aseveración "Tardé mucho en encontrar lugar". Podemos determinar que se presenta un problema de información, o más bien falta de ella. Uno podria afirmar que la información con la que cuentan los conductores está determinada por el alcance de su vista. Sin embargo, sería un error, ya que es obstaculizado por condiciones que reducen drásticamente los lugares que el conductor va percibiendo. En primer lugar, entre más lejos estan los objetos, los ángulos se vuelven mas agudos y por ende es dificil distinguir distancias. Manejar hace que los conductores estén concentrados en otra cosa más que en encontrar espacios libres para estacionarse. Existen más detrimentos a la hora de buscar un cajón de estacionamiento en la calle. Haciendo el ejercicio de suposición en donde el conductor manejando despacio tiene solamente presentes los 5 espacios de coche delante de él; 10 en total. Encontramos que el número de espacios en cuadras a la redonda superan los cientos. En el mejor de los casos el conductor está consciente del 10% de los espacios designados para vehiculos de un área determinada.

Éste es un problema grave de falta de información que permite que los conductores tomen decisiones poco óptimas para estacionarse. Existe el siguiente estudio **estudio** que nos indica que el 30% del transito en lugares de alta demanda es ocacionada por automovilistas en busca de dejar su vehiculo a la orilla de la calle. Con mayor y mejor información ellos podrían tomar mejores decisiones y no solo llegar a su destino más rápido, además disminuir las congestiones de transito para los demás que solamente están de paso. Por otro lado la sensación que tienen los automovilistas son amargas, estresantes y enfurecedoras. Son éstos sentimientos lo que sirven de ejecutor para que un conductor pudiera tomarse un tiempo para buscar, con ésta mejor información las acciones que debe realizar. La solución por ende debe cumplir el caso de uso **Como conductor quiero revisar los espacios disponibles para estacionarme adentro de un área de interés**

Los casos de uso que se tomaron en consideración son descritos en un listado a continuación y se explican a más detalle posteriormente. Se tomó la consideración de solamente incluir los casos de uso más importantes.

- Realizar un pago de parquímetro.
- Revisar el uso actual de parquímetro.
- Revisar historial de uso de parquímetro.
- Revisar espacios disponibles en un área de interés.
- Generar recordatorio de expiración de uso de parquimetro.

## Casos de Uso

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

```plantumlcode
@startuml
left to right direction
skinparam packageStyle rectangle
skinparam backgroundColor transparent
actor Conductor
actor Policia
rectangle "Pagar Parquimetro" {
  Conductor -- (checkout)
  (checkout) .> (payment) : include
  (help) .> (checkout) : extends
  (checkout) -- Policia
}
@enduml
```

## Vistas

# Aplicación para Oficial de tránsito

## Casos de Uso

- Revisar espacios morosos.
- Revisar placas de vehículo.

### Busqueda de Morosos

### Checar placas

## Vistas

# Sitio web para Gobierno.

## Casos de Uso

### Dar de alta/baja oficiales

### Ver estadísticas por zona.

### Ver estadísticas generales

## Vistas

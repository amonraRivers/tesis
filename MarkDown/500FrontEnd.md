# Frontend

Éste proyecto es completamente dependiente del correcto funcionamiento del sensor que se desarrolla en los fragmentos anteriores en éste documento. Eso explica la razón por la cual hasta ahorita empieza el analisis y la solución para la parte frontal del sistema que hará que los conductores sepan en qué lugar se pueden estacionar.

El backend y el frontend fueron desarrollados en paralelo. Para dar la sensación de orden aparentemente cronológico comenzaré con el frontend, aquello que se le presenta al usuario que le permite realizar toma de decisiones al volante de manera rápida y segura.

# Análisis

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

# Aplicación para Conductor

## Casos de Uso

## Vistas

# Aplicación para Oficial de tránsito

## Casos de Uso

### Busqueda de Morosos

### Checar placas

## Vistas

# Sitio web para Gobierno.

## Casos de Uso

### Dar de alta/baja oficiales

### Ver estadísticas por zona.

### Ver estadísticas generales

## Vistas

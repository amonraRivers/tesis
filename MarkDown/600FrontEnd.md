# Frontend

Éste proyecto es completamente dependiente del correcto funcionamiento del sensor que se desarrolla en los fragmentos anteriores en éste documento. Eso explica la razón por la cual hasta ahorita empieza el analisis y la solución para la parte medular del sistema que hará que los conductores sepan en qué lugar se pueden estacionar.

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

Por suerte para el desarrollo, se tenía el acceso a las computadoras mac necesarias para realizar el desarrollo estaban disponibles.

## MultiPlataforma

En años recientes, empezaron a generarse plataformas de desarrollo móvil con características muy similares a aquellas del desarrollo web. El lenguaje preferido Javascript con estilos CSS y un layout XML al estilo HTML. Los principales competidores son Vue Native, Ionic y React Native

### Ionic y CordoVa

S

### React Native y Vue

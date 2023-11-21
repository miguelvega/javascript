# javascript

### En JavaScript, todas las operaciones de red son asíncronas. ¿Porque es esto importante?

Esto es importante porque JavaScript se ejecuta en un entorno de un solo hilo , lo que significa que realiza una tarea a la vez. 
Las operaciones de red, como hacer solicitudes HTTP, pueden llevar tiempo, y si fueran síncronas, bloquearían la ejecución del resto del código, haciendo que la interfaz de usuario se congele y sea menos receptiva. Al ser asíncronas, estas operaciones permiten que otras tareas se ejecuten mientras se espera la respuesta de la red, lo que mejora la eficiencia y la capacidad de respuesta del programa.

### En Javascript, queremos realizar acciones tras una operación/solicitud de red completa. ¿Qué paradigma de programación hace esto posible?

La capacidad de llevar a cabo acciones después de completarse una operación de red se sustenta en el paradigma de programación basado en eventos (event-driven programming). JavaScript emplea constructos como callbacks, promesas y async/await para gestionar operaciones asíncronas y ejecutar acciones específicas en respuesta a eventos, como la finalización de una solicitud de red. Este enfoque permite que el flujo de ejecución continúe sin bloqueos, mejorando así la eficiencia y la capacidad de respuesta del programa.

### ¿Javascript proporciona soporte limitado para la herencia a través de qué mecanismo?

JavaScript proporciona soporte limitado para la herencia a través del mecanismo de prototipos. En lugar de depender de clases como en otros lenguajes de programación orientados a objetos, JavaScript utiliza prototipos que permiten a los objetos heredar propiedades y métodos de otros objetos a través de su cadena de prototipos. Donde cada objeto tiene una propiedad privada (referida como su [[Prototype]]) que mantiene un enlace a otro objeto llamado su prototipo. Ese objeto prototipo tiene su propio prototipo, y así sucesivamente hasta que se alcanza un objeto cuyo prototipo es null. Por definición, null no tiene prototipo, y actúa como el enlace final de esta cadena de prototipos.

### ¿Qué es el DOM? ¿Qué librería nos ayuda a usar Javascript para manipular el DOM?
DOM en español sería Modelo de Objetos del Documento. Es una interfaz de programación que nos permite crear, cambiar, o remover elementos del documento.
También, podemos agregar eventos a esos elementos para hacer más dinámica nuestra página. El navegador genera un evento cuando interactua con el servidor, este 
evento indica lo que ha ocurrido. Javascrpit realiza acciones especificas de la app para modificar el DOM cuando sucede dicho evento. 
El DOM visualiza el documento de HTML como un árbol de tres nodos. Un nodo representa un documento de HTML y este nodo contiene dos hijos los cuales
son los elementos <head> y <body>. 
Una librería comúnmente utilizada para manipular el DOM de manera más fácil y eficiente es jQuery. jQuery simplifica las tareas comunes de manipulación del DOM y manejo de eventos, proporcionando una interfaz más sencilla y abstracciones que facilitan el desarrollo con JavaScript.


## Booleano

`undefined == null` <br>
Esta comparación devuelve true porque en JavaScript, undefined es considerado igual a null en una comparación no estricta (==). 

`NaN == NaN` <br>
NaN (Not a Number) en JavasScript es un valor especial que no se considera igual a sí mismo en una comparación no estricta. Por lo tanto, NaN == NaN se evalúa como false. Este comportamiento se debe a que NaN se utiliza para representar un valor no numérico o indefinido, y no tiene sentido comparar dos valores no numéricos entre sí.

`null == false` <br>
null se considera falso en un contexto booleano, pero en una comparación no estricta, null no se considera igual a false. Por lo tanto, devuelve false

`0 == false` <br>
Esta comparación devuelve true. En una comparación no estricta, el número 0 se considera igual a false. Esto es parte de las conversiones automáticas de tipos en JavaScript.

`"" == false` <br>
Similar al caso anterior, en una comparación no estricta, una cadena vacía "" se considera igual a false. Por lo tanto, "" == false se evalúa como true. Esto se debe a que JavaScript realiza conversiones automáticas de tipos al comparar valores de diferentes tipos.

Sin embargo si usamos la igualdad estricta, el resultado seria false para todas la comparaciones anteriores.
Ademas, En lugar de utilizar == o ===, podemos utilizar Object.is() para las comparaciones en ciertos casos especiales en los que se quería asegurar un comportamiento de igualdad más preciso y consistente.

### Arrays

`[1, 2, 3] + [4, 5, 6]`  <br>
Esta expresión concatenará los dos arrays en lugar de sumar sus elementos. En JavaScript, el operador + utilizado con arrays realiza la concatenación de las cadenas resultantes de convertir los arrays a texto. Por lo tanto, el resultado será la cadena "1,2,34,5,6". 

`!![]`  <br>
Esto convierte el array vacío [] a un valor booleano. El operador ! niega el valor, y !! lo convierte de nuevo a su forma original. En JavaScript, cualquier array, incluso uno vacío, se evalúa como true en un contexto booleano. Por lo tanto, !![] se evalúa como true.

`[] == true` <br>
JavaScript realiza una conversión automática de tipos en comparaciones. En este caso, el array vacío [] se convierte a un valor booleano, que es true. Luego, JavaScript intenta convertir true a un número para la comparación, y true se convierte a 1. Por lo tanto, esta expresión se evalúa como [] == 1, lo cual es false.

`[10, 1, 3].sort()`  <br>
sort() ordena los elementos de un array como cadenas. En este caso, los números se ordenan como cadenas, resultando en ["1", "10", "3"].

`[] == 0` <br>
Similar al tercer punto, JavaScript realiza conversiones automáticas de tipos. El array vacío [] se convierte a un valor booleano (true), luego true se convierte a 1, y finalmente se compara con 0. Por lo tanto, esta expresión se evalúa como 1 == 0, lo cual es false.

## Clausuras

```javascript

function f1(x) {
  var baz = 3;
  return function (y) {
    console.log(x + y + (baz++));
    }
}
var bar = f1(5);
bar(11);

```
Primero se define `f1` que es una función que toma un parámetro `x`. Dentro de esta función, se declara una variable baz con el valor 3. Luego, se devuelve otra función anónima que toma un parámetro `y` y realiza una operación que involucra `x`,`y` y `baz++`

Llamamos a `f1` con el argumento 5, y el resultado se asigna a la variable bar. En este punto, bar se convierte en una función que tiene acceso al estado de la función f1 en el momento donde el valor de x = 5 y a una variable llamada baz = 3.

Finalmente, se llama a la función bar con el argumento 11. Entonces, dentro de la función anónima devuelta por f1, tenemos que x es 5, y es 11, y baz = 3. Ademas, la expresión baz++ devuelve 3 y luego incrementa baz en 1.

Por lo tanto, en la consola se imprimirá 19.


# javascript

### En JavaScript, todas las operaciones de red son asíncronas. ¿Porque es esto importante?

Esto es importante porque JavaScript se ejecuta en un entorno de un solo hilo , lo que significa que realiza una tarea a la vez. 
Las operaciones de red, como hacer solicitudes HTTP, pueden llevar tiempo, y si fueran síncronas, bloquearían la ejecución del resto del código, haciendo que la interfaz de usuario se congele y sea menos receptiva. Al ser asíncronas, estas operaciones permiten que otras tareas se ejecuten mientras se espera la respuesta de la red, lo que mejora la eficiencia y la capacidad de respuesta del programa.

### En Javascript, queremos realizar acciones tras una operación/solicitud de red completa. ¿Qué paradigma de programación hace esto posible?

### ¿Javascript proporciona soporte limitado para la herencia a través de qué mecanismo?
En lo que a herencia se refiere, JavaScript sólo tiene una estructura: objetos. Cada objeto tiene una propiedad privada (referida como su [[Prototype]]) que mantiene un enlace a otro objeto llamado su prototipo. Ese objeto prototipo tiene su propio prototipo, y así sucesivamente hasta que se alcanza un objeto cuyo prototipo es null. Por definición, null no tiene prototipo, y actúa como el enlace final de esta cadena de prototipos. De esta manera estamos heredando propiedades.

### ¿Qué es el DOM? ¿Qué librería nos ayuda a usar Javascript para manipular el DOM?
DOM en español sería Modelo de Objetos del Documento. Es una interfaz de programación que nos permite crear, cambiar, o remover elementos del documento.
También, podemos agregar eventos a esos elementos para hacer más dinámica nuestra página. El navegador genera un evento cuando interactua con el servidor, este 
evento indica lo que ha ocurrido.Javascrpit reliza acciones especificaos de la app para modificar el DOM cuando sucede dicho evento. 
El DOM visualiza el documento de HTML como un árbol de tres nodos. Un nodo representa un documento de HTML y este nodo contiene dos hijos los cuales
son los elementos <head> y <body>. 





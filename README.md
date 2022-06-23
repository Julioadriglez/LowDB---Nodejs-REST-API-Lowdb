# LowDB---Nodejs-REST-API-Lowdb
Uso de  archivo  .JSON como DB con LowDB

## Introducción

Se utilizo un archivo `.json` como una `db` para guardar tareas con ayuda del modulo `LowDB` y se agregaron endpoints de  `get` para mostrar todas las tareas, una tarea apartir del id y contar todas las tareas, `put` para actualizar  tarea, `delete` para eliminar tarea y `post` para crear tareas.

## Tecnologias

* `Express`
* `LowDB`
* `Nodejs`
* `Nodemon`
* `Uuid`
* `Morgan`

## Diseño

![esquema](https://user-images.githubusercontent.com/99068430/175423957-fdb2ab23-51fd-44ad-8fa4-80312b72c5af.png)


* `package.json`: Se encuentran todas las dependencia que utiliza el pograma como `Express`, `LowDB`, `Nodemon`, `Uuid` y `Morgan`.

* `db.json`: Es la base de datos local la cual es creada por el archivo `database.js` y en el caso de no contener ningun dato de escribe `tasks:[]`.

* `tasks.controller.js`: Contiene todos los metodos y funciones a realizar de los endpoints, aqui tambien se le agrega el `id` aleatoriamente usando el modulo de `Uuid`.

* `tasks.js`:Contiene todas las direcciones delos enpoints.

* `app.js`: Este archivo solo contiene codigo de `Express`, tambien lee datos enviados en formato `.json` y los asigna a una variable llamada `body` dentro de `request`.

* `index.js`: Es el archivo principar que corre el servidor al igual manda a crear la base de datos si no hay ninguna.





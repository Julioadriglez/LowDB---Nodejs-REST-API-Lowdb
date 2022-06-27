# LowDB---Nodejs-REST-API-Lowdb
Uso de  archivo  .JSON como DB con LowDB

## Introducción

Se utilizo un archivo `.json` como una `db` para guardar tareas con ayuda del módulo `LowDB` y se agregaron endpoints de  `get` para mostrar todas las tareas, una tarea a partir del id y contar todas las tareas, `put` para actualizar  tarea, `delete` para eliminar tarea y `post` para crear tareas.

## Tecnologias

* `Express`
* `LowDB`
* `Nodejs`
* `Nodemon`
* `Uuid`
* `Morgan`

## Diseño

![esquema](https://user-images.githubusercontent.com/99068430/175423957-fdb2ab23-51fd-44ad-8fa4-80312b72c5af.png)


* `package.json`: Se encuentran todas las dependencia que utiliza el programa como `Express`, `LowDB`, `Nodemon`, `Uuid` y `Morgan`.

* `db.json`: Es la base de datos local la cual es creada por el archivo `database.js` y en el caso de no contener ningún dato de escribe `tasks:[]`.

* `tasks.controller.js`: Contiene todos los métodos y funciones a realizar de los endpoints, aquí también se le agrega el `id` aleatoriamente usando el módulo de `Uuid`.

* `tasks.js`: Contiene todas las direcciones de los enpoints.

* `app.js`: Este archivo solo contiene código de `Express`, también lee datos enviados en formato `.json` y los asigna a una variable llamada `body` dentro de `request`.

* `index.js`: Es el archivo principal que corre el servidor al igual manda a crear la base de datos si no hay ninguna.


## API

#### GET

En esta api se usaron 3 endpoints que usan `get`:
* El primero `http://localhost:3000/tasks` muestra todas las tareas en la `db`.


![getTasks](https://user-images.githubusercontent.com/99068430/176043223-d56676d5-c3f6-4d2c-b1f4-bb96bd66e89b.png)


* El segundo cuenta todas las tareas que hay en la `db`.

![getCount](https://user-images.githubusercontent.com/99068430/176043756-67613110-af30-4c88-82a1-4f6825691a9c.png)

 Para poder mandar las peticiones se utilizó la extensión `thunder client` y el resultado muestra 4 tareas que son las que se encuentran dentro de la base de datos `db.json`

![dbJson](https://user-images.githubusercontent.com/99068430/176044198-8b60b983-b430-4251-9fdb-ec853ef4734c.png)

* El tercero filtra una tarea por medio del `id` y la muestra.

![getId](https://user-images.githubusercontent.com/99068430/176045236-ed5696bb-2734-4ab2-a3aa-274424ffaee2.png)

#### POST

* Se creo un solo endpoint con `POST` para crear tareas.
Se manda la petición en `Thunder client` y dentro de `Body` se manda `name` y `description` como se muestra en la ilustración siguiente:

![post](https://user-images.githubusercontent.com/99068430/176047550-ce9f1857-b150-4ccb-9e6d-188a95e77d94.png)

Dentro de `db.json` se crea la tarea mandada.

![postDb](https://user-images.githubusercontent.com/99068430/176047653-9328b248-e553-4ef9-aebf-7c5c5587a807.png)

#### PUT

* Este endpoint se utiliza `PUT` para actualizar alguna tarea mediante su `id`.
En la dirección se manda el `id` de la tarea que se va actualizar y en el `body` se manda `name` o `description` o ambos dependiendo que se quiera actualizar.

![putDb](https://user-images.githubusercontent.com/99068430/176052538-54337b66-626b-4a2e-b9d9-124b00fc5ae1.png)

En la `db` se actualizo la petición

![putDb](https://user-images.githubusercontent.com/99068430/176052662-4164a0b8-26c1-4d2a-b62d-2b440c1bf421.png)

#### DELETE

* El endpoint `DELETE` se utiliza para eliminar una tarea por medio de su `id`.

![delete](https://user-images.githubusercontent.com/99068430/176053051-fafd3864-d948-46a6-850c-861960a9fca0.png)

En la `db` se eliminó la tarea.

![deleteDb](https://user-images.githubusercontent.com/99068430/176053120-6dfdc1ee-3456-4e65-8125-b8bfbd4c6964.png)


Este ejercicio fue tomado de [link](https://www.youtube.com/watch?v=bUEDnENTB6o&ab_channel=FaztCode)






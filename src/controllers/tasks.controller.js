import {v4} from 'uuid'; //se llama a uuid para generar ids aleatorios 
import {getConnection} from '../database.js';

export const getTasks = (req, res) => {
    res.send("sending tasks");
}

export const createTask = async (req, res) => { //para crear tarea
    
    const newTask = {
        id: v4(), //se ejecuta uuid mediante v4 para cear el id
        name: req.body.name,
        description: req.body.description
    }

    const db = getConnection();
    db.data.tasks.push(newTask); //esto solo lo inserta en memoria 
    await db.write() //guarda la aplicación dentro de la base de datos
    res.json(newTask)
}

export const getTask = (req, res) => { //para obtener una unica tarea
    res.send("sending task by id");
}

export const updateTask = (req, res) => { //para actualizar una tarea 
    res.send("updating task");
}

export const deleteTask = (req, res) => { //para eliminar una tarea
    res.send("deleting task");
}

export const count = (req, res) => { //para contar tareas
    res.send("counting tasks");
}

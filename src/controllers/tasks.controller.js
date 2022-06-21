import {v4} from 'uuid'; //se llama a uuid para generar ids aleatorios 
import {getConnection} from '../database.js';

export const getTasks = (req, res) => {
    const tasks = getConnection().data.tasks //muestra toda la informacion del db
    res.json(tasks)
};

export const createTask = async (req, res) => { //para crear tarea
    
    const newTask = {
        id: v4(), //se ejecuta uuid mediante v4 para cear el id
        name: req.body.name,
        description: req.body.description
    };
    try { //mandar mensaje por si hay un error
        const db = getConnection();
        db.data.tasks.push(newTask); //esto solo lo inserta en memoria 
        await db.write(); //guarda la aplicación dentro de la base de datos
        
        res.json(newTask);
    } catch (error) {
        return res.status(500).send({message: error.message}); //esto se manda si hay error
    }
};

export const getTask = (req, res) => { //para obtener una unica tarea
    const taskFound = getConnection().data.tasks.find(
        (task) => task.id === req.params.id); //filtra latarea por medio del id
    if(!taskFound) return res.sendStatus(404); //cuando se mete un parametro idefinido manda este error 
    res.json(taskFound);
}
export const updateTask = async (req, res) => { //para actualizar una tarea 
    const db = getConnection();
    const taskFound = db.data.tasks.find((t) => t.id === req.params.id ? taskFound : t);
    if(!taskFound) return res.sendStatus(404);

    taskFound.name = req.body.name;
    taskFound.description = req.body.description;

    db.data.tasks.map(t => t.id === req.params.id);

    await db.write();

    res.send(taskFound); 
};

export const deleteTask = async (req, res) => { //para eliminar una tarea
    const db = getConnection();
    const taskFound = db.data.tasks.find((t) => t.id === req.params.id);
    if(!taskFound) return res.sendStatus(404);

    const newTask = db.data.tasks.filter((t) => t.id !== req.params.id); //filtra el id y lo elimina
    db.data.tasks = newTask;

    await db.write(); //guarda nuevamente los datos
    res.json(taskFound)

}

export const count = (req, res) => { //para contar tareas
    res.send("counting tasks");
}

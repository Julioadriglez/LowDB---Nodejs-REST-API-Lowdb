export const getTasks = (req, res) => {
    res.send("sending tasks");
}

export const createTask = (req, res) => { //para crear tarea
    res.send("Creating task");
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

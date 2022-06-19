import { Router } from "express";
import { count, createTask, deleteTask, getTask, getTasks, updateTask } from "../controllers/tasks.controller.js" //importamos el get tasks
const router = Router();

router.get('/tasks', getTasks); //cuando visiten "/tasks" de ejecutara la función getTasks
router.get('/tasks/count', count); //para contar todas las tareas
router.get('/tasks/:id', getTask); //para obtener una unica tarea apartir del id que mande el usuario 
router.post('/tasks', createTask); //post para poder crear tareas 
router.put('/tasks/:id', updateTask); //metodo put para actualizar tarea
router.delete('/tasks/:id', deleteTask); //Elinimar tarea
export default router;
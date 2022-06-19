import { Router } from "express";
import { getTasks } from "../controllers/tasks.controller.js" //importamos el get tasks
const router = Router();

router.get('/tasks', getTasks); //cuando visiten "/tasks" de ejecutara la función getTasks
router.get('/tasks/count', getTasks); //para contar todas las tareas
router.get('/tasks/:id', getTasks); //para obtener una unica tarea apartir del id que mande el usuario 
router.post('/tasks', getTasks); //post para poder crear tareas 
router.put('/tasks/:id', getTasks); //metodo put para actualizar 
router.delete('/tasks/:id', getTasks);
export default router;
import express from 'express'; //solo contienen express en app
import taskRoutes from './routes/tasks.js';

const app = express();

app.use(express.json()) //cuando envian una dato en formato .json el podra leerlo y lo asignara en una variable llamada body dentro de request  

app.use(taskRoutes);

export default app; //con esto exportamos app
import express from 'express'; //solo contienen express en app
import taskRoutes from './routes/tasks.js';

const app = express();

app.use(express.json()) //cuando envian una dato en formato .json el podra leerlo y lo asignara en una variable llamada badi dentro de request  

app.use(taskRoutes);

export default app; //con esto esportamos app
import express from 'express'; //solo contienen express en app
import taskRoutes from './routes/tasks.js';

const app = express();

app.use(taskRoutes)

export default app; //con esto esportamos app
import app from './app.js'// importamos app a este el archivo principal
import {createConnection} from './database.js'

createConnection(); // crea la base de datos
app.listen(3000);
console.log("Server is running  on port 3000");
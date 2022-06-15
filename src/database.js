import {Low, JSONFile} from 'Lowdb';
import {join, dirname} from 'path'; //'dirname'extrae la dirección actual del archivo que se esta ejecutando
import { fileURLToPath } from 'url';

let db;

const __dirname = dirname(fileURLToPath(import.meta.url)); //convierte un impor a una ruta que dirname puede entender

function createConnection() {
    const file = join(__dirname, '../db.json')
    const adapter = new JSONFile(file) //creael archivo db.json
    db = new Low(adapter)
    console.log(db)
    
    db.data = {test: "Hello world"}

    db.write()
}
createConnection() 
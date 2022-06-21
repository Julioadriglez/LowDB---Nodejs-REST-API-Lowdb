import {Low, JSONFile} from 'Lowdb';
import {join, dirname} from 'path'; //'dirname'extrae la dirección actual del archivo que se esta ejecutando
import { fileURLToPath } from 'url';

let db;

const __dirname = dirname(fileURLToPath(import.meta.url)); //convierte un impor a una ruta que dirname puede entender

export async function createConnection() { // se exporta por que el archivo principal de mi aplicacion lo va a ejecutar 
    const file = join(__dirname, '../db.json');// le damos la dirección del archivo para que se cree
    const adapter = new JSONFile(file); //le manda la ruta del archivo que va a crear
    db = new Low(adapter); //se crea una nueva conexión para pasar el adapter
    
    await db.read (); //primero se le el archivo antes de agregar datos a db.json
    
    db.data ||= {tasks:[]}; // ||= si db esta vacio le asigna el valor tasks:[] y si tiene algo solo va a continuar y no va asignar nada

    db.write(); //write para guardar en .json
}
export const getConnection = () => db; //getConecction retorna el objeto de db 
const argv = require('./config/yargs').argv;
var colors = require('colors');

// destructuración, accedemos directamente a la función
const { crearArchivo, listarTabla }  = require('./multiplicar/multiplicar');

let comando = argv._[0]; //extraemos la primera posición del arreglo de los comandos

switch (comando) {
    case 'listar':

        listarTabla(argv.base, argv.limite);
        break;  
            
    case 'crear':

        crearArchivo(argv.base, argv.limite)
            .then( archivo => console.log(`Archivo creado: `, colors.green( archivo)))
            .catch( e => console.log(e)); 

        break;
    default: 
        console.log('Comando no reconocido');
}






/* let parametro = argv[2]; // dos porque las dos primeras estan ocupadas
let base = parametro.split('=')[1]; */ // obtenemos solo un string, dado que queremos la posición 1




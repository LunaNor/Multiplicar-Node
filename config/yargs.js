const opts = {
    base: { // son las flags, se ingresan como --base
        demand: true, // que es obligatorio
        alias: 'b' // signfica que puede ser escrito como -b
    },
    limite: {
        alias: 'l',
        default: 10 // si no es ingresado, por defecto es 10
    }
}


const argv = require('yargs')  // importamos el paquete de yargs que tenemos en node_modules
    .command('listar', 'Imprime en consola la tabla de multiplicar', { opts }) // es el comando, por ejemplo listar, crear, etc
   
    .command('crear', 'Genera un archivo con la tabla de multiplicar', { opts }) // es el comando, por ejemplo listar, crear, etc
        
    .help()
    .argv; 

module.exports = {
    argv
}
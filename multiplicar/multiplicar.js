//Requireds
const fs = require('fs');
var colors = require('colors');


let listarTabla = (base, limite = 10) => { // si no es ingresado el limite, toma por defecto el valor de 10

    console.log('================='.green);
    console.log(`Tabla de ${ base }`.green);
    console.log('================='.green);

    for( let i = 1; i <= limite; i++ ) {

        console.log(`${ base } * ${ i } = ${ base * i }`);

    }

}


let crearArchivo = (base, limite = 10) =>  {

    return new Promise((resolve, reject) => {
        
        /* Validación si es número o no */
        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } *  ${ i } = ${ base * i } \n`;
        }

        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {

            if (err) 
                reject(err) // si hay error, mostramos el error
            else 
                resolve(`tabla-${ base }-al-${ limite }.txt`) // devuelve el nombre del archivo creado
            
        
        });

    });

};

module.exports =     {
    crearArchivo,
    listarTabla
}




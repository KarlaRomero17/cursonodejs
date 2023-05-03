
const { crearArchivo } = require('../helpers/multiplicar');
const argv = require('../config/yargs');
const colors = require('colors');
console.clear();
//crear tabla de multiplicar del 5
// console.log(process.argv);
//esta forma no es conveniente porq se realiza por posicion
// const [,,arg3= 'tabla=5'] = process.argv;
// const [, tabla] = arg3.split('=');
// console.log(tabla);

//Dos tipos de argv
// console.log(process.argv);//este viene en string
// console.log(argv); //este es mas personalizable 
// console.log('tabla: yargs', argv.tabla);
// const tabla =5;

// crearArchivo(tabla)
crearArchivo(argv.t, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.bgWhite, 'creado'))
    .catch(err => console.log(err));
    

    

const argv = require('yargs')
    .option('t',{
        alias: 'tabla',
        type: 'number',
        demandOption: true,
        describe: 'Es la tabla de multiplicar'
    })
    //listar la tabla de multiplicar con yargs
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    //agregar limite la tabla de multiplicar
    .option('h',{
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Es el limite de la tabla de multiplicar'
    })
    //validar que el argumento sea un número
    .check((argv, options) => {
        if(isNaN(argv.t)){
            throw 'La tabla tiene que ser un número'
        }
        return true;
    })
    .argv;

module.exports = argv;
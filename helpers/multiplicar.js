
const fs = require('fs');
const colors = require('colors');
const crearArchivo = async(tabla = 5, listar=false, hasta=10) => {
    return new Promise ((resolve, reject) => {
        try {
            let salida = '';
            let consola = '';
            
            for(let i=1; i<=hasta; i++){
                salida +=`${tabla} x ${i} = ${tabla*i}`+'\n';
                consola +=`${tabla} ${'x'.green} ${i} ${'='.green} ${colors.bold(tabla*i)}`+'\n';
            }
            if(listar){
                //video 5. importar archivos
                console.log("Tabla del: ".blue.bold, colors.red.bold(tabla));
                console.log(consola);
            }
            /*fs.writeFile(`tabla-${tabla}.txt`, salida, (err) => {
                if(err) throw err;
                console.log('tabla-5.txt creado')
            });*/
            fs.writeFileSync(`../salida/tabla-${tabla}.txt`, salida);
            //console.log(`tabla-${tabla}.txt creado`);
            resolve(`tabla-${tabla}.txt`);
        } catch (error) {
            throw error;
        }
    });
}

module.exports = {
    crearArchivo
}
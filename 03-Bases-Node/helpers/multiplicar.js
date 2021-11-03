
const fs = require('fs');
var colors = require('colors')

const crearArchivo = (base = 5, listar = false, hasta=10) => {
    return new Promise((resolve, reject) => {
        let salida, consola = '';

        for (let index = 1; index <= hasta; index++) {
            consola += `${base} ${'x'.green} ${index} ${'='.green} ${base * index}\n`;
            salida += `${base} x ${index} = ${base * index}\n`;
        }

        if (listar) {
            console.log('================='.green);
            console.log('   Tabla del:'.green, colors.blue(base))
            console.log('================='.green);
            console.log(consola);
        }

        try {
            let fileName = `tabla-${base}.txt`;
            fs.writeFileSync('./salida/' + fileName, salida);
            resolve(fileName);
        } catch (error) {
            reject(error);
        }
    });
}

module.exports = {
    crearArchivo
}
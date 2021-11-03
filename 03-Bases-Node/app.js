
const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')
require('colors')

console.clear();

// console.log(process.argv);
// console.log(argv);

// const [, , arg3 = 'base=5'] = process.argv;
// const [, base] = arg3.split('=');  

crearArchivo(argv.b, argv.l, argv.h)
    .then(NombreArchivo => console.log(`${NombreArchivo}, creado!`.random))
    .catch(err => console.log(err));
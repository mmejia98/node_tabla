const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const color = require('colors');

console.clear();

//console.log(argv);

//console.log('base: yargs ' + argv.base);

/*console.log(process.argv);

const [, , arg3='base=9'] = process.argv;
const [, base=5] =arg3.split('=');*/

console.log(argv);

crearArchivo(argv.b, argv.l, argv.h)
    .then( (nombreArchivo) => console.log(nombreArchivo + ' created!'.rainbow) )
    .catch( (err) => console.log(err) );

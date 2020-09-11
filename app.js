const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listaTabla } = require('./multiplicar/multiplicar');
//const { listaTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listaTabla(argv.base, argv.limite)
            .then(archivo => console.log(`${archivo}`.yellow))
            .catch(err => console.log(err))
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo Creado: ${archivo}`.green))
            .catch(err => console.log(err))
        break;

    default:
        console.log('comando no reconocido');
        break;
}
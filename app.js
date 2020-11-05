const { crearArchivo } = require('./multiplicar/multiplicar');
const argv = require('yargs').command('listar', 'Imprime en consola la tabla de multiplicar', {
    base: {
        demandOption: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10,
    }
}).help.argv


let comando = argv._[0];
switch (comando) {
    case 'listar':
        console.log('listar');
        break;
    case 'crear':
        crearArchivo(argv.base).then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        console.log('crear');
        break;

    default:
        console.log('no reconocido');
        break;
}




let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];

// console.log('Limite :' + argv.limite);
// console.log('base :' + sargv.base);
// crearArchivo(argv.base).then(archivo => console.log(`Archivo creado: ${archivo}`))
//     .catch(e => console.log(e));
const fs = require('fs');

let data = '';

let crearArchivo = (base) => {
        return new Promise((resolve, reject) => {

            if (!Number(base)) {
                reject('No es un numero');
                return;
            }

            for (let i = 1; i <= 10; i++) {


                data += (i + `*${base} =` + i * base) + '\n';
            }

            fs.writeFile(`tabla-${base}.txt`, data, (err) => {
                if (err) reject(err)
                else
                    resolve(`El archivo del ${base} ha sido creado!`);
            });


        });

    }
    //exportando la funcion
module.exports = {
    crearArchivo
}
const fs = require('fs');

let listaTabla = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('la base no es un numero')
            return;
        }
        if (!Number(limite)) {
            reject('el limite no es un numero')
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        resolve(data);

    })

}


//module.exports.crearArchivo
let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('no es un numero la base');
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla${base}.txt`, data, (err) => {

            if (err) {
                reject(err);
            } else {
                resolve(`table${base}.txt`)
            }

        });

    })
}


module.exports = {
    crearArchivo,
    listaTabla
}
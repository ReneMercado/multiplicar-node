//requireds
const fs = require('fs'); //Tipo de required de Libreria que ya existe en node
const colors = require('colors');
// const fs = require('express');//Paquete que no son nativos de node (otras personas los hicieron)
// const fs = require('./fs'); //archivos del proyecto

let listarTabla = (base, limite = 10) => {
    console.log('====================='.green);
    console.log(`Tabla de ${base}`.red);
    console.log('====================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(` ${base } * ${i} = ${i*base}`);
    }

};


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += ` ${base } * ${i} = ${i*base}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`)
        });
    });
};

module.exports = {
    crearArchivo: crearArchivo,
    listarTabla: listarTabla
}
const fs = require('fs');

const crearArchivo = (base = 5, listar = false, hasta = 10) => {
    return new Promise((resolve, reject) => {
        let salida = '';
        if(hasta > 0){
            for(let i = 1; i <= hasta; i++){
                salida += (`${base} x ${i} = ${base*i}\n`);
            }
            try{
                if(listar) console.log(salida);
                fs.writeFileSync(`./salida/Tabla-${base}.txt`, salida);
                resolve(`Tabla-${base}.txt`);
            }catch(error){
                reject(error);
            }     
        }else{
            reject('El limite debe ser mayor que cero'.red);
        }
           
    })   
}

module.exports = {
    crearArchivo
}
import {Promise} from 'es6-promise'

function otraPromesa(valor:number){
    return new Promise(function(resolve,reject){
        if(valor>0){
            resolve(valor)
        }else{
            reject(valor)
        }
    })
}

otraPromesa(-2)
.then((data)=>console.log("Resultado: ",data))
.catch((data)=>console.log("Fallo: ",data))
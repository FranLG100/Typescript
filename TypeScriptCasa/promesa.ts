import {Promise} from 'es6-promise'

function probandoPromesa(valor:number){
    return new Promise(function (resolve,reject){
if(valor>8){
    resolve(valor)
}else{
    reject(valor)
}
    })
}

probandoPromesa(16)
.then((data)=>{console.log("Resultado: ",data)})
.catch((data)=>{console.log("Error: ",data)})
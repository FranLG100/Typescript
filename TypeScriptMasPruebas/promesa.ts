import {Promise} from 'es6-promise'

function evaluarPromesa(valor:number){
    return new Promise(function(resolve,reject){
        if(valor>5)
        resolve(200)
        else
        reject("Ha fallado")
    })
}

evaluarPromesa(5)
.then((data)=>(console.log("SUCCESS ",data)))
.catch((data)=>(console.log("ERROR ",data)))


function getAvenger(nombre:string, arma:string="arco", poder?:string){
    var mensaje:string
    if(poder)
       mensaje=`${nombre} tiene el poder de ${poder} y un arma: ${arma}`
    else
        mensaje=`${nombre} tiene un arma: ${arma}`
    return mensaje
}

console.log(getAvenger("Thor","Mjolnir"))
console.log(getAvenger("Iron Man","traje de Iron Man", "super cuenta bancaria"))
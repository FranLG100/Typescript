function getAvenger(nombre:string,arma:string="Poderío",enemigo?:string){
    if(enemigo)
    return `${nombre} ha cogido su ${arma} para enfrentarse a ${enemigo}`
    else
    return `${nombre} guarda su ${arma}`
}

alert(getAvenger('Hulk','puños de la cosa','Michael Jackson'))
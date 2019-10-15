let funciones={
    triangulo(base:number,altura:number){return (base*altura)/2;},
    circulo(radio:number){return "Soy un circulo"},
    rectangulo(lado:number){return lado*lado}
}

let {triangulo, rectangulo, circulo} = funciones;

let persona = {
    nombre:"Juan",
    apellido:"Cuesta",
    profesion:"Presidente de la comunidad"
}

function imprimir({nombre="", apellido="", profesion='N/A'}){
    return `${nombre} ${apellido}, ${profesion}`
}

alert(rectangulo(4)+" "+imprimir(persona))
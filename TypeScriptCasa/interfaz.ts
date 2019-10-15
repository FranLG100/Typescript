interface HEROE{
    nombre:string,
    poder:string,
    nivel?:number
}

var goku:HEROE={
    nombre:"Goku",
    poder:"Kame-Hame-Ha",
    nivel:9001
}

var vegeta:HEROE={
    nombre:"Vegeta",
    poder:"Ser el Príncipe de los Saiyan"
}

if(vegeta.nivel)
    alert(goku.nombre+" "+goku.nivel)
else
    alert(vegeta.nombre)
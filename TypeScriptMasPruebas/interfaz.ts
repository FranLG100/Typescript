interface CANINO {
    nombre:string,
    ruido:string,
    victimas?:number
}

const perro:CANINO={
    nombre:'Beethoven',
    ruido:'Guau guau'
}

const kujo:CANINO={
    nombre:'Kujo',
    ruido:'Guau guau, voy a por ti',
    victimas:15932
}

if(perro.victimas)
alert(perro.ruido)
else
alert(kujo.victimas)
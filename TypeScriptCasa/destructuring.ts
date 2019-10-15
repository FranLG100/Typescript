let foo=[1,2,3]
let [uno,dos,tres]=foo

let modulo={
    cuadrado(lon:number) {return lon*lon},
    texto(prueba:string) {return prueba},
    saludo(){return "HOLA"}
}

let {texto,saludo,cuadrado}=modulo

alert(dos+" "+saludo())


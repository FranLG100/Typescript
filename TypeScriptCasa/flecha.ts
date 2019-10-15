var suma=(a:number,b:number)=>(a+b)
var reflejo=(cadena:string)=>cadena
var complejo=()=>{
    var nombre="Fran"
    var edad=26
    return `Me llamo ${nombre}, tengo ${edad}`
}
var objeto=()=>({numero:14,probando:"Prueba"})
alert("Suma: "+suma(2,3)+" "+"Reflejo: "+reflejo("Probando")+" "+"Complejo: "+complejo()+" "+objeto().numero)
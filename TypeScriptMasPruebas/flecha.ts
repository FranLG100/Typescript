var suma=(a:number,b:number)=>(a+b);
var reflejo=(valor:string)=>valor;
export var objeto=(ref:number)=>({ref,message:"Esto es una prueba de objeto"})

alert(suma(4,3)+" "+reflejo("Reflejando")+" "+objeto(4).message)
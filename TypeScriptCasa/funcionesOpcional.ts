function opcional(nombre:string,apellido:string="de Incognito",edad?:number):string{
if(edad)
return `Me llamo ${nombre} ${apellido} y tengo ${edad} años`
else
return `Me llamo ${nombre} ${apellido}`
}

alert(opcional("Fran"))
console.log(opcional("Fran","Lorente",26))
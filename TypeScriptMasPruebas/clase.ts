class cuadrado{
largo:number

constructor(lado:number){
    this.largo=lado
}

area(){
    return this.largo*this.largo
}
}

var figura=new cuadrado(2)

alert(figura.area())
class RECTANGULO{
    base:number
    altura:number

    constructor(base:number,altura:number){
        this.altura=altura,
        this.base=base
    }

    area(){
        return this.altura*this.base
    }
}

var figura=new RECTANGULO(3,8)
alert(figura.area())
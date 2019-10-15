class RECTANGULO{
    base:number
    altura:number
    
    constructor(base:number,altura:number){
        this.base=base,
        this.altura=altura
    }

    calcularArea(){
        return this.base*this.altura
    }
}

export {RECTANGULO}
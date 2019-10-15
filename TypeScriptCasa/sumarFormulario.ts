function sumarHTML(){
    var sumA:number=(<HTMLInputElement>document.getElementById("sumandoa")).valueAsNumber;

    var sumB:number=(<HTMLInputElement>document.getElementById("sumandob")).valueAsNumber;

    var dir=document.getElementById("#")
    var resultado:number=(<HTMLInputElement>document.getElementById("resultado")).valueAsNumber=(sumA+sumB)
    var p=document.createElement("p");
    p.innerHTML=resultado.toString();

    if(dir!=null)
    {
        dir.append(p);
    }
}
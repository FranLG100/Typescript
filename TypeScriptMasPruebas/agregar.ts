function agrega(){
    var texto=(<HTMLInputElement>document.getElementById("texto")).value
    var dir=document.getElementById("#")
    var p=document.createElement("p")
    p.innerHTML=texto

    if(dir!=null && texto.trim()!="")
    dir.append(p)
    else
    alert("CADENA VACÍA")
}

function suma(){
    var sumA=(<HTMLInputElement>document.getElementById("suma")).valueAsNumber;
    var sumB=(<HTMLInputElement>document.getElementById("sumb")).valueAsNumber;
    (<HTMLInputElement>document.getElementById("result")).valueAsNumber=sumA+sumB;
}
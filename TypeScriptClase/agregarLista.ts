function agregar(){
    var dir=document.getElementById("#")
    var texto:string=(<HTMLInputElement>document.getElementById("texto")).value
    var p=document.createElement("p")
    p.innerHTML=texto;

    if(texto.trim()==""){
        alert("No dejes el campo vacío")
    }
    if(dir!=null){
        dir.appendChild(p);
        (<HTMLInputElement>document.getElementById("texto")).value=""
    }else{
        console.log("Llegamos")
    }
}
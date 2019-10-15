function alertar(){
    var texto=(<HTMLInputElement>document.getElementById("texto")).value
    if(texto.trim()!="")
    alert(texto)
    else
    alert("CADENA VACÍA")
}
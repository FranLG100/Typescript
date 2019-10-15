function alertar() {
    var texto = document.getElementById("texto").value;
    if (texto.trim() != "")
        alert(texto);
    else
        alert("CADENA VACÍA");
}

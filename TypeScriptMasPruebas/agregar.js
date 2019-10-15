function agrega() {
    var texto = document.getElementById("texto").value;
    var dir = document.getElementById("#");
    var p = document.createElement("p");
    p.innerHTML = texto;
    if (dir != null && texto.trim() != "")
        dir.append(p);
    else
        alert("CADENA VACÍA");
}
function suma() {
    var sumA = document.getElementById("suma").valueAsNumber;
    var sumB = document.getElementById("sumb").valueAsNumber;
    document.getElementById("result").valueAsNumber = sumA + sumB;
}

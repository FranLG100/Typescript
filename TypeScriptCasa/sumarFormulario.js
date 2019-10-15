function sumarHTML() {
    var sumA = document.getElementById("sumandoa").valueAsNumber;
    var sumB = document.getElementById("sumandob").valueAsNumber;
    var dir = document.getElementById("#");
    var resultado = document.getElementById("resultado").valueAsNumber = (sumA + sumB);
    var p = document.createElement("p");
    p.innerHTML = resultado.toString();
    if (dir != null) {
        dir.append(p);
    }
}

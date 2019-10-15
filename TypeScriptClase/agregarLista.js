function agregar() {
    var dir = document.getElementById("#");
    var texto = document.getElementById("texto").value;
    var p = document.createElement("p");
    p.innerHTML = texto;
    if (texto.trim() == "") {
        alert("No dejes el campo vacío");
    }
    if (dir != null) {
        dir.appendChild(p);
        document.getElementById("texto").value = "";
    }
    else {
        console.log("Llegamos");
    }
}

function getAvenger(nombre, arma, poder) {
    if (arma === void 0) { arma = "arco"; }
    var mensaje;
    if (poder)
        mensaje = nombre + " tiene el poder de " + poder + " y un arma: " + arma;
    else
        mensaje = nombre + " tiene un arma: " + arma;
    return mensaje;
}
console.log(getAvenger("Thor", "Mjolnir"));
console.log(getAvenger("Iron Man", "traje de Iron Man", "super cuenta bancaria"));

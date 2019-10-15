function getAvenger(nombre, arma, enemigo) {
    if (arma === void 0) { arma = "Poderío"; }
    if (enemigo)
        return nombre + " ha cogido su " + arma + " para enfrentarse a " + enemigo;
    else
        return nombre + " guarda su " + arma;
}
alert(getAvenger('Hulk', 'puños de la cosa', 'Michael Jackson'));

function opcional(nombre, apellido, edad) {
    if (apellido === void 0) { apellido = "de Incognito"; }
    if (edad)
        return "Me llamo " + nombre + " " + apellido + " y tengo " + edad + " a\u00F1os";
    else
        return "Me llamo " + nombre + " " + apellido;
}
alert(opcional("Fran"));
console.log(opcional("Fran", "Lorente", 26));

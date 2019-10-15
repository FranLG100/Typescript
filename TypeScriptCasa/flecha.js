var suma = function (a, b) { return (a + b); };
var reflejo = function (cadena) { return cadena; };
var complejo = function () {
    var nombre = "Fran";
    var edad = 26;
    return "Me llamo " + nombre + ", tengo " + edad;
};
var objeto = function () { return ({ numero: 14, probando: "Prueba" }); };
alert("Suma: " + suma(2, 3) + " " + "Reflejo: " + reflejo("Probando") + " " + "Complejo: " + complejo() + " " + objeto().numero);

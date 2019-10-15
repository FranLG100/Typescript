var foo = [1, 2, 3];
var uno = foo[0], dos = foo[1], tres = foo[2];
var modulo = {
    cuadrado: function (lon) { return lon * lon; },
    texto: function (prueba) { return prueba; },
    saludo: function () { return "HOLA"; }
};
var texto = modulo.texto, saludo = modulo.saludo, cuadrado = modulo.cuadrado;
alert(dos + " " + saludo());

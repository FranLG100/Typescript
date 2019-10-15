"use strict";
exports.__esModule = true;
var suma = function (a, b) { return (a + b); };
var reflejo = function (valor) { return valor; };
exports.objeto = function (ref) { return ({ ref: ref, message: "Esto es una prueba de objeto" }); };
alert(suma(4, 3) + " " + reflejo("Reflejando") + " " + exports.objeto(4).message);

var funciones = {
    triangulo: function (base, altura) { return (base * altura) / 2; },
    circulo: function (radio) { return "Soy un circulo"; },
    rectangulo: function (lado) { return lado * lado; }
};
var triangulo = funciones.triangulo, rectangulo = funciones.rectangulo, circulo = funciones.circulo;
var persona = {
    nombre: "Juan",
    apellido: "Cuesta",
    profesion: "Presidente de la comunidad"
};
function imprimir(_a) {
    var _b = _a.nombre, nombre = _b === void 0 ? "" : _b, _c = _a.apellido, apellido = _c === void 0 ? "" : _c, _d = _a.profesion, profesion = _d === void 0 ? 'N/A' : _d;
    return nombre + " " + apellido + ", " + profesion;
}
alert(rectangulo(4) + " " + imprimir(persona));

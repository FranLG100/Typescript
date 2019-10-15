var cuadrado = /** @class */ (function () {
    function cuadrado(lado) {
        this.largo = lado;
    }
    cuadrado.prototype.area = function () {
        return this.largo * this.largo;
    };
    return cuadrado;
}());
var figura = new cuadrado(2);
alert(figura.area());

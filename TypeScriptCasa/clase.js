var RECTANGULO = /** @class */ (function () {
    function RECTANGULO(base, altura) {
        this.altura = altura,
            this.base = base;
    }
    RECTANGULO.prototype.area = function () {
        return this.altura * this.base;
    };
    return RECTANGULO;
}());
var figura = new RECTANGULO(3, 8);
alert(figura.area());

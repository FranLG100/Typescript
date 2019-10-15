"use strict";
exports.__esModule = true;
var RECTANGULO = /** @class */ (function () {
    function RECTANGULO(base, altura) {
        this.base = base,
            this.altura = altura;
    }
    RECTANGULO.prototype.calcularArea = function () {
        return this.base * this.altura;
    };
    return RECTANGULO;
}());
exports.RECTANGULO = RECTANGULO;

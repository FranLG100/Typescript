"use strict";
exports.__esModule = true;
var es6_promise_1 = require("es6-promise");
function hacerAlgoPromesa() {
    return new es6_promise_1.Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('hacer algo que ha ocupado un tiempo...');
            var number = Math.random();
            if (number < 0.7) {
                resolve(number); // correcto
            }
            else {
                reject(number);
            }
        }, 2000);
    });
}
hacerAlgoPromesa()
    .then(function (data) { console.log("Resultado: ", data); })["catch"](function (error) { console.log("Error: ", error); });

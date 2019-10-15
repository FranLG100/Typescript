function otraPromesa(valor) {
    return new Promise(function (resolve, reject) {
        if (valor > 0) {
            resolve(valor);
        }
        else {
            reject(valor);
        }
    });
}
otraPromesa(-2)
    .then(function (data) { return console.log("Resultado: ", data); })["catch"](function (data) { return console.log("Fallo: ", data); });

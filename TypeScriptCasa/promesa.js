
function probandoPromesa(valor) {
    return new Promise(function (resolve, reject) {
        if (valor > 8) {
            resolve(valor);
        }
        else {
            reject(valor);
        }
    });
}
probandoPromesa(4)
    .then(function (data) { console.log("Resultado: ", data); })["catch"](function (data) { console.log("Error: ", data); });

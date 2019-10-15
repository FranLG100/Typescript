
function evaluarPromesa(valor) {
    return new Promise(function (resolve, reject) {
        if (valor > 5)
            resolve(200);
        else
            reject(valor*3);
    });
}
evaluarPromesa(5)
    .then(function (data) { return (console.log("SUCCESS ", data)); })["catch"](function (data) { return (console.log("ERROR ", data)); });

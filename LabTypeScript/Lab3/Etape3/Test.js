function strinit(Klass, data) {
    var dataSplit = data.split(",");
    var t = Klass.constructor.apply(Klass, dataSplit);
    return Klass;
}
function csvinit(col, data) {
    var dataSplit = data.split(",");
    var cols = col.split(",");
    var myObject = Object;
    cols.forEach(function (col) {
        myObject[col] = "";
    });
    myObject.constructor = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        for (var index = 0; index < cols.length; index++) {
            this[cols[index]] = args[index];
        }
    };
    var instance = strinit(myObject, data);
    return instance;
}
var personne = csvinit("prenom,nom", "Jon,Snow");
console.log(personne);

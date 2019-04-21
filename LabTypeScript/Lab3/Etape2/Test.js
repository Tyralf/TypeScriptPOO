"use strict";
exports.__esModule = true;
var Model;
(function (Model) {
    function strinit(Klass, data) {
        var dataSplit = data.split(",");
        var t = Klass.constructor.apply(Klass, dataSplit);
        return t;
    }
    function csvinit(filename, data) {
        var className = filename.split(".")[0];
        className = className[0].toUpperCase() + className.substring(1, className.length);
        console.log(className);
        var t = Model[className];
        var instance = strinit(t.prototype, data);
        return instance;
    }
    var Personne = /** @class */ (function () {
        function Personne(prenom, nom) {
            this.prenom = prenom;
            this.nom = nom;
        }
        return Personne;
    }());
    Model.Personne = Personne;
    var personne = csvinit("personne.csv", "Jon,Snow");
    console.log(personne);
})(Model = exports.Model || (exports.Model = {}));

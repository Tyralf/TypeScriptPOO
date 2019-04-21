"use strict";
exports.__esModule = true;
var Model;
(function (Model) {
    function strinit(Klass, data) {
        var dataSplit = data.split(",");
        var t = Klass.constructor.apply(Klass, dataSplit);
        return Klass;
    }
    function csvinit2(fileName, col, data) {
        var dataSplit = data.split(",");
        var cols = col.split(",");
        var className = fileName.split(".")[0];
        className = className[0].toUpperCase() + className.substring(1, className.length);
        //////////////////
        var myObject = Model[className];
        myObject.prototype.constructor();
        var instance = myObject.prototype;
        for (var index = 0; index < cols.length; index++) {
            switch (cols[index]) {
                case "nom":
                    instance["setNom"](dataSplit[index]);
                    break;
                case "decisive":
                    instance["setDecisive"](dataSplit[index] == "true");
                    break;
                default:
                    var subClassName = cols[index][0].toUpperCase() + cols[index].substring(1, cols[index].length);
                    var t = Model[subClassName].prototype;
                    console.log(t);
                    t.constructor(dataSplit[index]);
                    console.log(t);
                    instance["set" + subClassName](t);
                    break;
            }
        }
        return instance;
    }
    var Bataille = /** @class */ (function () {
        function Bataille() {
        }
        Bataille.prototype.setNom = function (value) { this.nom = value; };
        Bataille.prototype.getNom = function () { return this.nom; };
        Bataille.prototype.setAnnee = function (value) { this.annee = value; };
        Bataille.prototype.getAnnee = function () { return this.annee; };
        Bataille.prototype.setDecisive = function (value) { this.decisive = value; };
        Bataille.prototype.getDecisive = function () { return this.decisive; };
        Bataille.prototype.toString = function () {
            // TODO
            return this.nom + " " + this.annee.toString() + " " + this.decisive;
        };
        return Bataille;
    }());
    Model.Bataille = Bataille;
    var Annee = /** @class */ (function () {
        function Annee(s) {
            var params = s.split(" ");
            this.numero = parseInt(params[0]);
            this.ac = params[1] == "AC";
        }
        Annee.prototype.toString = function () {
            return this.numero + " " + (this.ac ? "AC" : "BC");
        };
        return Annee;
    }());
    Model.Annee = Annee;
    var output = csvinit2("bataille.csv", "nom,annee,decisive", "Massacre à Durlieu,302 AC,true");
    console.log(output.toString());
})(Model = exports.Model || (exports.Model = {}));

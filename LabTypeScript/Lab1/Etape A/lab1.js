var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Wagon = /** @class */ (function () {
    function Wagon() {
        this.wagonName = "wagon";
    }
    Wagon.prototype.Afficher_wagon = function () {
        console.log(this.sPrint());
    };
    Wagon.prototype.Afficher_train = function () {
        this.Afficher_wagon();
        if (this.Suivant != null)
            this.Suivant.Afficher_train();
    };
    Wagon.prototype.sPrint = function () {
        return this.wagonName + ": ";
    };
    return Wagon;
}());
var WagonVoyageur = /** @class */ (function (_super) {
    __extends(WagonVoyageur, _super);
    function WagonVoyageur() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wagonName = "Wagon Voyageur";
        _this.voyageurs = [];
        return _this;
    }
    WagonVoyageur.prototype.sPrint = function () {
        var result = _super.prototype.sPrint.call(this);
        this.voyageurs.forEach(function (Element) {
            result = result + Element.nom + " | ";
        });
        return result;
    };
    return WagonVoyageur;
}(Wagon));
var Voyageur = /** @class */ (function () {
    function Voyageur(nom) {
        this.wagon = null;
        this.nom = nom;
    }
    Voyageur.prototype.Monter = function (wv) {
        this.Decendre();
        this.wagon = wv;
        this.wagon.voyageurs.push(this);
    };
    Voyageur.prototype.Decendre = function () {
        if (this.wagon != null) {
            var index = this.wagon.voyageurs.indexOf(this);
            this.wagon.voyageurs.splice(index, 1);
            this.wagon = null;
        }
    };
    return Voyageur;
}());
var Marchand = /** @class */ (function () {
    function Marchand(nom) {
        this.nom = nom;
    }
    return Marchand;
}());
var WagonMarchand = /** @class */ (function (_super) {
    __extends(WagonMarchand, _super);
    function WagonMarchand() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wagonName = "Wagon Marchand";
        return _this;
    }
    WagonMarchand.prototype.Affreter = function (m) {
        this.Marchand = m;
    };
    WagonMarchand.prototype.sPrint = function () {
        return _super.prototype.sPrint.call(this) + this.Marchand.nom;
    };
    return WagonMarchand;
}(Wagon));
var WagonDouble = /** @class */ (function (_super) {
    __extends(WagonDouble, _super);
    function WagonDouble() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wagonName = "Wagon Double";
        _this.WagonMarchand = new WagonMarchand();
        return _this;
    }
    WagonDouble.prototype.Affreter = function (m) {
        this.WagonMarchand.Affreter(m);
    };
    WagonDouble.prototype.sPrint = function () {
        var result = _super.prototype.sPrint.call(this) + this.WagonMarchand.Marchand.nom;
        return result;
    };
    return WagonDouble;
}(WagonVoyageur));
var v1 = new Voyageur("Philémon");
var v2 = new Voyageur("Peninna");
var m = new Marchand("Far ★ Star");
var w1 = new WagonVoyageur();
v1.Monter(w1);
v2.Monter(w1);
var w2 = new WagonVoyageur();
w1.Suivant = w2;
v2.Monter(w2);
var w3 = new WagonMarchand();
w2.Suivant = w3;
w3.Affreter(m);
var w4 = new WagonMarchand();
w3.Suivant = w4;
w4.Affreter(m);
var w5 = new WagonDouble();
w4.Suivant = w5;
w5.Affreter(m);
v1.Monter(w5);
v2.Monter(w5);
w1.Afficher_train();

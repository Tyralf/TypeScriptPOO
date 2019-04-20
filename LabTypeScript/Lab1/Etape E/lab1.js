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
        _this.voyage = new Voyage();
        return _this;
    }
    WagonVoyageur.prototype.sPrint = function () {
        return _super.prototype.sPrint.call(this) + this.voyage.sPrint();
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
        this.wagon.voyage.voyageurs.push(this);
    };
    Voyageur.prototype.Decendre = function () {
        if (this.wagon != null) {
            var index = this.wagon.voyage.voyageurs.indexOf(this);
            this.wagon.voyage.voyageurs.splice(index, 1);
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
        _this.fret = new Fret();
        return _this;
    }
    WagonMarchand.prototype.sPrint = function () {
        return _super.prototype.sPrint.call(this) + this.fret.Marchand.nom;
    };
    return WagonMarchand;
}(Wagon));
var WagonDouble = /** @class */ (function (_super) {
    __extends(WagonDouble, _super);
    function WagonDouble() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wagonName = "Wagon Double";
        _this.fret = new Fret();
        _this.voyage = new Voyage();
        return _this;
    }
    WagonDouble.prototype.Affreter = function (m) {
        this.fret.Affreter(m);
    };
    WagonDouble.prototype.sPrint = function () {
        var result = _super.prototype.sPrint.call(this) + this.fret.sPrint() + " | " + this.voyage.sPrint();
        return result;
    };
    return WagonDouble;
}(Wagon));
var Voyage = /** @class */ (function () {
    function Voyage() {
        this.voyageurs = [];
    }
    Voyage.prototype.sPrint = function () {
        var result = "";
        this.voyageurs.forEach(function (Element) {
            result = result + Element.nom + " | ";
        });
        return result;
    };
    return Voyage;
}());
var Fret = /** @class */ (function () {
    function Fret() {
    }
    Fret.prototype.Affreter = function (m) {
        this.Marchand = m;
    };
    Fret.prototype.sPrint = function () {
        return this.Marchand.nom;
    };
    return Fret;
}());
var Facade = /** @class */ (function () {
    function Facade() {
    }
    Facade.affreter = function (m, w) {
        if (w instanceof WagonMarchand) {
            w.fret.Affreter(m);
        }
        else if (w instanceof WagonDouble) {
            w.fret.Affreter(m);
        }
        else {
            console.log("Pas Affretable !");
        }
    };
    Facade.monter = function (v, w) {
        if (w instanceof WagonVoyageur) {
            v.Monter(w);
        }
        else if (w instanceof WagonDouble) {
            v.Monter(w);
        }
        else {
            console.log("Pas Montable !");
        }
    };
    return Facade;
}());
var v1 = new Voyageur("Philémon");
var v2 = new Voyageur("Peninna");
var m = new Marchand("Far ★ Star");
var w1 = new WagonVoyageur();
Facade.monter(v1, w1);
Facade.monter(v2, w1);
var w2 = new WagonVoyageur();
w1.Suivant = w2;
Facade.monter(v2, w2);
var w3 = new WagonMarchand();
w2.Suivant = w3;
Facade.affreter(m, w3);
var w4 = new WagonMarchand();
w3.Suivant = w4;
Facade.affreter(m, w4);
var w5 = new WagonDouble();
w4.Suivant = w5;
Facade.affreter(m, w5);
Facade.monter(v1, w5);
Facade.monter(v2, w5);
w1.Afficher_train();

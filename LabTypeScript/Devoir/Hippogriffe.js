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
var Unite = /** @class */ (function () {
    function Unite(nom) {
        this.nom = nom;
    }
    Unite.prototype.toString = function () {
        return this.nom + " : Pv = " + this.pv;
    };
    Unite.prototype.action = function (texte) {
        console.log(this.toString() + " " + texte);
    };
    Unite.prototype.attaque = function (ennemi) {
        ennemi.pv--;
        this.action("attaque " + ennemi);
    };
    return Unite;
}());
var Aigle = /** @class */ (function (_super) {
    __extends(Aigle, _super);
    function Aigle(nom) {
        var _this = _super.call(this, nom) || this;
        _this.pv = 3;
        return _this;
    }
    Aigle.prototype.vole = function () {
        this.action("Fend les nuages ! ");
    };
    Aigle.prototype.attaque = function (ennemi) {
        ennemi.pv -= 2;
        this.action("Vole dans les plumes de " + ennemi);
    };
    return Aigle;
}(Unite));
var Cheval = /** @class */ (function (_super) {
    __extends(Cheval, _super);
    function Cheval(nom) {
        var _this = _super.call(this, nom) || this;
        _this.pv = 4;
        return _this;
    }
    Cheval.prototype.galope = function () {
        this.action("gallope a la vitesse du vent ! ");
    };
    Cheval.prototype.attaque = function (ennemi) {
        ennemi.pv -= 2;
        this.action("inflige une ruade à " + ennemi);
    };
    return Cheval;
}(Unite));
var Hippogriffe = /** @class */ (function (_super) {
    __extends(Hippogriffe, _super);
    function Hippogriffe(nom) {
        var _this = _super.call(this, nom) || this;
        _this.pv = 5;
        return _this;
    }
    return Hippogriffe;
}(Aigle));
applyMixins(Hippogriffe, [Cheval]);
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
        });
    });
}
var buck = new Hippogriffe("Buck");
buck.vole();
buck.galope();

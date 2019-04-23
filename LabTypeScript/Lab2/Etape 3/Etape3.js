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
var Fruit = /** @class */ (function () {
    function Fruit() {
    }
    return Fruit;
}());
var FruitAPeler = /** @class */ (function (_super) {
    __extends(FruitAPeler, _super);
    function FruitAPeler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FruitAPeler.prototype.peler = function () { };
    return FruitAPeler;
}(Fruit));
var Orange = /** @class */ (function (_super) {
    __extends(Orange, _super);
    function Orange() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Orange;
}(FruitAPeler));
var Banane = /** @class */ (function (_super) {
    __extends(Banane, _super);
    function Banane() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Banane;
}(FruitAPeler));
var Fraise = /** @class */ (function (_super) {
    __extends(Fraise, _super);
    function Fraise() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Fraise;
}(Fruit));
var BrochetteGen = /** @class */ (function () {
    function BrochetteGen() {
        this.fruits = new Array();
    }
    BrochetteGen.prototype.embrocher = function (f) {
        this.fruits.push(f);
    };
    BrochetteGen.prototype.debrocher = function () {
        if (this.fruits.length == 0)
            return null;
        var f = this.fruits[this.fruits.length - 1];
        this.fruits.pop();
        return f;
    };
    return BrochetteGen;
}());
function compte_sloubifuit(brochette) {
    var count = 0;
    var f = brochette.debrocher();
    while (f != null) {
        count++;
        f = brochette.debrocher();
    }
    console.log("Nombre de fruit debroché : " + count);
}
function pele_mele(brochette) {
    var count = 0;
    var f = brochette.debrocher();
    while (f != null) {
        f.peler();
        count++;
        f = brochette.debrocher();
    }
    console.log("Nombre de fruit debroché et pelé : " + count);
}
function appel_a_peau(brochette) {
    brochette.embrocher(new Orange());
    brochette.embrocher(new Banane());
}
function brochette_fp_fruit(fruit) {
    var brochette_p = new BrochetteGen();
    var brochette_f = brochette_p;
    brochette_f.embrocher(fruit);
    brochette_p.debrocher().peler();
}
function exemple_banane_p() {
    // Créer une brochette de fruits.
    var brochette = new BrochetteGen();
    // Créer une banane.
    var banane = new Banane;
    // Embrocher la banane.
    brochette.embrocher(banane);
    // Débrocher un fruit.
    var f = brochette.debrocher();
    // Peler le fruit débroché.
    f.peler();
}
// Pseudocode. Ajoutez les casts qui vont bien.
function exemple_fruit_p(fruit) {
    // Créer une brochette de fruits.
    var brochette = new BrochetteGen();
    // Embrocher le fruit
    brochette.embrocher(fruit); // Erreur STATIQUE Ici car fruit et de type statique Fruit et pas de type fruitAPeler
    // Débrocher un fruit.
    var f = brochette.debrocher();
    // Peler le fruit débroché.
    f.peler();
}
function recette4() {
    var brochette_fruit = new BrochetteGen();
    brochette_fruit.embrocher(new Banane());
    brochette_fruit.embrocher(new Orange());
    brochette_fruit.embrocher(new Fraise());
    var brochette_banane = new BrochetteGen();
    brochette_banane.embrocher(new Banane());
    brochette_banane.embrocher(new Banane());
    brochette_banane.embrocher(new Banane());
    compte_sloubifuit(brochette_fruit);
    compte_sloubifuit(brochette_banane);
    var brochette_fruitAPeler = new BrochetteGen();
    brochette_fruitAPeler.embrocher(new Banane());
    brochette_fruitAPeler.embrocher(new Orange());
    brochette_fruitAPeler.embrocher(new Banane());
    brochette_banane.embrocher(new Banane());
    brochette_banane.embrocher(new Banane());
    brochette_banane.embrocher(new Banane());
    brochette_fruit.embrocher(new Banane());
    brochette_fruit.embrocher(new Orange());
    brochette_fruit.embrocher(new Fraise());
    pele_mele(brochette_fruitAPeler);
    pele_mele(brochette_banane);
    //pele_mele(brochette_fruit); //plante ici, etant donnée qu
    brochette_fruitAPeler.embrocher(new Banane());
    brochette_fruitAPeler.embrocher(new Orange());
    brochette_fruitAPeler.embrocher(new Banane());
    brochette_banane.embrocher(new Banane());
    brochette_banane.embrocher(new Banane());
    brochette_banane.embrocher(new Banane());
    brochette_fruit.embrocher(new Banane());
    brochette_fruit.embrocher(new Orange());
    brochette_fruit.embrocher(new Fraise());
    appel_a_peau(brochette_fruitAPeler);
    appel_a_peau(brochette_fruit); //erreur statique
    appel_a_peau(brochette_banane);
}
recette4();

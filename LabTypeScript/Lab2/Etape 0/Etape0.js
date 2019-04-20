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
var Brochette = /** @class */ (function () {
    function Brochette() {
        this.fruits = new Array();
    }
    Brochette.prototype.embrocher = function (f) {
        this.fruits.push(f);
    };
    Brochette.prototype.debrocher = function () {
        if (this.fruits.length == 0)
            return null;
        var f = this.fruits[this.fruits.length - 1];
        this.fruits.pop();
        return f;
    };
    return Brochette;
}());
function exemple_banane() {
    // Créer une brochette de fruits.
    var brochette = new Brochette();
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
function exemple_fruit(fruit) {
    // Créer une brochette de fruits.
    var brochette = new Brochette();
    // Embrocher le fruit
    brochette.embrocher(fruit);
    // Débrocher un fruit.
    var f = brochette.debrocher();
    // Peler le fruit débroché.
    f.peler();
}
function recette1() {
    var b = new Banane();
    var f = new Fraise();
    var a;
    exemple_banane();
    exemple_fruit(b);
    //exemple_fruit(f);
    exemple_fruit(a);
}
recette1();

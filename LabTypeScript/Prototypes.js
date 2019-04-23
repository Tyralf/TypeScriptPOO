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
var Hello = /** @class */ (function () {
    function Hello(what) {
        this.what = what;
    }
    Hello.prototype.hello = function () {
        console.log("hello " + this.what);
    };
    return Hello;
}());
var Hola = /** @class */ (function (_super) {
    __extends(Hola, _super);
    function Hola() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hola.prototype.hello = function () {
        _super.prototype.hello.call(this);
        console.log("Hola " + this.what);
    };
    return Hola;
}(Hello));
//// DEMO Ici 
// On veux etendre la classe Hello, lui rajouter un attribut nom
var HelloRedef = /** @class */ (function () {
    function HelloRedef() {
    }
    HelloRedef.prototype.setNom = function (nom) {
        this.nom = nom;
    };
    HelloRedef.prototype.getNom = function () {
        return this.nom;
    };
    return HelloRedef;
}());
function redefClass(cible, redef) {
    Object.getOwnPropertyNames(redef.prototype).forEach(function (name) {
        Object.defineProperty(cible.prototype, name, Object.getOwnPropertyDescriptor(redef.prototype, name));
    });
}
redefClass(Hello, HelloRedef);
var a = new Hello("test"); // petit bemole je perds ma suretée de type et si je ne sais pas quel sont les methodes de l'objet je ne sais pas 
a.setNom("John Doe");
console.log(a.getNom());
// Autre methode : 
var b = new Hello("test");
b["setNom"]("Marie");
console.log(b["getNom"]());

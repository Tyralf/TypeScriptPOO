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
        this["what"] = what;
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
        console.log("Hola " + this["what"]);
    };
    return Hola;
}(Hello));
var a = Hello.prototype;
var b = Hello;
var o = Object;
var oo = Object.prototype;
var c = new Hello("teest");
console.log(a);
console.log(b);
console.log(o);
console.log(oo);
console.log(c);
var hello = new Hello("world");
hello.hello();
var hola = new Hola("test");
hola.hello();

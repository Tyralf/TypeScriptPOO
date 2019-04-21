function strinit(Klass, data) {
    var _a;
    var dataSplit = data.split(",");
    var t = (_a = Klass.prototype).constructor.apply(_a, dataSplit);
    return Klass.prototype;
}
var Personne = /** @class */ (function () {
    function Personne(prenom, nom) {
        this.prenom = prenom;
        this.nom = nom;
    }
    return Personne;
}());
var test = new Personne("toto", "tata");
var js = strinit(Personne, "Jon,Snow");
console.log((typeof js) + " | prenom : " + js.prenom + ", nom : " + js.nom);
console.log(js);
console.log(test);

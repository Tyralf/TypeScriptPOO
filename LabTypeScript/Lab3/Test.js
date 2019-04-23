function strinit(Klass, data) {
    var dataSplit = data.split(",");
    Klass.constructor.apply(Klass, dataSplit);
    return Klass;
}
var Personne = /** @class */ (function () {
    function Personne(prenom, nom) {
        this.prenom = prenom;
        this.nom = nom;
    }
    return Personne;
}());
var test = new Personne("toto", "tata");
var js = strinit(Personne.prototype, "Jon,Snow");
console.log((typeof js) + " | prenom : " + js.prenom + ", nom : " + js.nom);
console.log(js);
console.log(test);
var a = Personne.prototype;
a.constructor("John", "Doe");
console.log(a);

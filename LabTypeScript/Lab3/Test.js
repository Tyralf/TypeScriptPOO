function strinit(klass, data) {
    var dataSplit = data.split(",");
    //var result = klass.new(dataSplit[0], dataSplit[1]);
    myObject = { prenom: dataSplit[0], nom: dataSplit[1] };
    var myObject;
    //var constructor = klass
    //ass.nom = dataSplit[1];
    return klass;
}
var Personne = /** @class */ (function () {
    function Personne() {
    }
    return Personne;
}());
var js = strinit(Personne, "Jon,Snow");
//console.log((typeof js )+ " | prenom : " + js.prenom + ", nom : " + js.nom);
var p = new Personne();
var t = typeof p;
console.log(js);

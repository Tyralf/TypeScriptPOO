function strinit (Klass : any , data : string )
{
    var dataSplit = data.split(",");
    Klass.constructor(...dataSplit)
    return Klass;   
}

class Personne 
{
    public prenom : string;
    public nom : string;

    constructor(prenom : string, nom : string){
        this.prenom = prenom;
        this.nom = nom;        
    }
}

var test : Personne = new Personne("toto", "tata");
var js = strinit(Personne.prototype, "Jon,Snow");

console.log((typeof js )+ " | prenom : " + js.prenom + ", nom : " + js.nom);
console.log(js);
console.log(test)


var a = Personne.prototype;
a.constructor("John","Doe");
console.log(a);



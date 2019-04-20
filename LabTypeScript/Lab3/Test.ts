function strinit<T extends{new(data : string):{}}>(constructor:T)
{
    var dataSplit = data.split(",");
    //var result = klass.new(dataSplit[0], dataSplit[1]);
   
    
 { prenom : dataSplit[0], nom : dataSplit[1]};
   

    //var constructor = klass
    
    //ass.nom = dataSplit[1];
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    }
}

class Personne 
{
    public prenom : string;
    public nom : string;

    Personne(s : string){
        
    }
}

var js = strinit<new Personne("Jon,Snow")>;

//console.log((typeof js )+ " | prenom : " + js.prenom + ", nom : " + js.nom);
var  p = new Personne()

console.log(js);




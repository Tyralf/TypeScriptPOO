export namespace Model
{
    function strinit (Klass : any , data : string )
    {
        var dataSplit = data.split(",");
        
        Klass.constructor(...dataSplit)
        
        return Klass;   
    }

    function csvinit (filename : string, data : string){
        
        var className = filename.split(".")[0];
        className = className[0].toUpperCase() + className.substring(1,className.length);
        console.log(className);
        var t = Model[className]
        var instance = strinit(t.prototype,data);
        return instance;
        
    }

    export class Personne 
    {
        public prenom : string;
        public nom : string;

        constructor(prenom : string, nom : string){
            this.prenom = prenom;
            this.nom = nom;        
        }
    }
    
    var personne = csvinit("personne.csv", "Jon,Snow");

    console.log(personne);
}
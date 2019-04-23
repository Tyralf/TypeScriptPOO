class Hello {
    what : string;
    constructor(what : string){
        this.what  = what;
    }

    hello(){
        console.log("hello " + this.what)
    }
}

//// DEMO 

// On veut étendre la classe Hello, lui rajouter un attribut nom

class HelloRedef
{
    nom : string;
    setNom(nom : string){
        this.nom = nom;
    }
    getNom(){
        return this.nom
    }
}

function redefClass(cible : any, redef : any){
    
        Object.getOwnPropertyNames(redef.prototype).forEach(name => {
            Object.defineProperty(cible.prototype, name, Object.getOwnPropertyDescriptor(redef.prototype, name));
        });
}

redefClass(Hello, HelloRedef);

var a : any = new Hello("test"); // petit bémol je perds ma sureté de type et si je ne sais pas quel sont les méthodes de l'objet je ne sais pas

a.setNom("John Doe");

console.log(a.getNom());

// Autre methode : 

var b = new Hello("test"); 
/* 
Ici je garde ma sureté des types mais la syntaxe b["maMethode"]() n'est pas très lisible. Et pour un travail en 
équipe il n'y a aucun indice sur la présence de l'attribut "setNom" ou "getNom" ... Donc on est loin du résultat souhaité...
*/

b["setNom"]("Marie");

console.log(b["getNom"]());
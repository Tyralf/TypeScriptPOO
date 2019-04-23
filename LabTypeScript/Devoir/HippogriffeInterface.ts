class Unite
{
    public nom : string ; 
    public pv : number ; 
    constructor(nom : string ){
        this.nom = nom;
    }
    public toString() : string {
        return this.nom + " : Pv = " + this.pv;
    }

    public action(texte : string)
    {
        console.log(this.toString() + " " + texte);
    }

    public attaque(ennemi : Unite)
    {
        ennemi.pv --;
        this.action("attaque " + ennemi);
    }
}

class Aigle extends Unite
{
    constructor(nom : string)
    {
        super(nom);
        this.pv = 3;
    }
    
    public vole()
    {
        this.action("Fend les nuages ! ")
    }

    public attaque(ennemi : Aigle)
    {
        ennemi.pv -= 2;
        this.action("Vole dans les plumes de " + ennemi);
    }
}

class Cheval extends Unite implements ICheval
{
    constructor(nom : string)
    {
        super(nom);
        this.pv = 4;
    }

    public galope()
    {
        this.action("gallope a la vitesse du vent ! ")
    }

    public attaque(ennemi : Unite)
    {
        ennemi.pv -= 2;
        this.action("inflige une ruade à " + ennemi);
    }
}

interface ICheval {
    galope();
}

class Hippogriffet extends Aigle implements ICheval  {

    constructor(nom : string)
    {
        super(nom)
        this.pv = 5;
    }

    public galope()
    {
        this.action("gallope a la vitesse du vent ! ")
    }   
}


var buck : Hippogriffe = new Hippogriffe("Buck");
var aigle : Aigle = new Aigle("jojo");
buck.vole();
buck.galope();

var chevaux : Array<ICheval> = new Array<ICheval>();

chevaux.push(buck);
//chevaux.push(aigle); Erreur Statique aigle n'est pas de type ICheval





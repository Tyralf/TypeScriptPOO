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

class Cheval extends Unite
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

class Hippogriffe extends Aigle implements Cheval {

    constructor(nom : string)
    {
        super(nom)
        this.pv = 5;
    }

    galope: () => void;
}

applyMixins(Hippogriffe, [Cheval]);

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
        });
    });
}

var buck : Hippogriffe = new Hippogriffe("Buck");
buck.vole();
buck.galope();




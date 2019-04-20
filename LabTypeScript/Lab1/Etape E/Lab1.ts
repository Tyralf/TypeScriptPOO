class Wagon {
    protected wagonName: string = "wagon";
    public Suivant: Wagon;
    
    public Afficher_wagon(){
        console.log(this.sPrint());
    }

    public Afficher_train(){
        this.Afficher_wagon();
		if(this.Suivant!=null) this.Suivant.Afficher_train();
    }

    public sPrint(): string{
        return this.wagonName + ": "; 
    }
}

class WagonVoyageur extends Wagon {
    wagonName: string = "Wagon Voyageur";
    public voyage : Voyage = new Voyage();

    public sPrint() : string { 
        return super.sPrint() + this.voyage.sPrint();       
	}
}

class Voyageur {
    private wagon : WagonVoyageur = null;
    public nom : string;

    public constructor(nom: string) { this.nom = nom; }

    public Monter(wv : WagonVoyageur){
        this.Decendre();
        this.wagon = wv;
		this.wagon.voyage.voyageurs.push(this);
    }

    public Decendre(){
        if(this.wagon != null) {
            var index : number = this.wagon.voyage.voyageurs.indexOf(this);
            this.wagon.voyage.voyageurs.splice(index,1);
			this.wagon = null;
		}
    }
}

class Marchand
{
    public nom : string;
    public constructor(nom: string) { this.nom = nom; }
}

class WagonMarchand extends Wagon
{
    wagonName: string = "Wagon Marchand";
    public fret : Fret = new Fret();
    public sPrint() : string 
    { 
        return super.sPrint() + this.fret.Marchand.nom;       
	}
}

class WagonDouble extends Wagon
{
    wagonName: string = "Wagon Double";
    public fret : Fret = new Fret();
    public voyage : Voyage = new Voyage();
    public Affreter(m: Marchand)
    {
        this.fret.Affreter(m);
    }
    public sPrint() : string{
        
        let result: string = super.sPrint() + this.fret.sPrint()+ " | " + this.voyage.sPrint();
        
        return result;
    }
}

class Voyage
{
    public voyageurs: Array<Voyageur> = [];
    public sPrint() : string { 
        var result : string = "";
        this.voyageurs.forEach(Element => {
            result = result + Element.nom + " | "
        });
        return result ;        
	}
}

class Fret
{
    public Marchand : Marchand;
    public Affreter(m: Marchand)
    {
        this.Marchand = m;
    }
    public sPrint() : string 
    { 
        return this.Marchand.nom;       
	}
}

abstract class Facade{
    public static affreter(m : Marchand, w : Wagon)
    {
        if (w instanceof WagonMarchand) 
        {
            w.fret.Affreter(m);
        }
        else if (w instanceof WagonDouble) 
        {
            w.fret.Affreter(m);
        } 
        else 
        {
            console.log("Pas Affretable !");
        }
    }

    public static monter(v : Voyageur, w : Wagon)
    {
        if (w instanceof WagonVoyageur) 
        {
            v.Monter(w);
        }
        else if (w instanceof WagonDouble) 
        {
            v.Monter(w);
        } 
        else 
        {
            console.log("Pas Montable !");
        }
    }
}

let v1: Voyageur = new Voyageur("Philémon");
let v2: Voyageur = new Voyageur("Peninna");
let m : Marchand = new Marchand("Far ★ Star");

let w1: WagonVoyageur = new WagonVoyageur();
Facade.monter(v1,w1);
Facade.monter(v2,w1);

let w2: WagonVoyageur = new WagonVoyageur();
w1.Suivant = w2;
Facade.monter(v2,w2);

let w3 : WagonMarchand = new WagonMarchand();
w2.Suivant = w3;
Facade.affreter(m,w3);

let w4 : WagonMarchand = new WagonMarchand();
w3.Suivant = w4;
Facade.affreter(m,w4);

let w5 : WagonDouble = new WagonDouble();
w4.Suivant = w5;
Facade.affreter(m,w5);
Facade.monter(v1,w5);
Facade.monter(v2,w5);

w1.Afficher_train();
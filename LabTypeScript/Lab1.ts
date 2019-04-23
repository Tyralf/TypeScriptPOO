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
        return this.wagonName + ":"; 
    }
}

class WagonVoyageur extends Wagon {
    wagonName: string = "Wagon Voyageur";
    public voyageurs: Array<Voyageur> = [];
    

    public sPrint() : string { 
        
        var result : string = this.wagonName + ":";

        this.voyageurs.forEach(Element => {
            result = result + Element.nom + " | "
        });

        return result ;        
	}
}

class Voyageur {
    private wagon : WagonVoyageur = null;
    public nom : string;

    public constructor(nom: string) { this.nom = nom; }

    public Monter(wv : WagonVoyageur){
        this.Decendre();
        this.wagon = wv;
		this.wagon.voyageurs.push(this);
    }

    public Decendre(){
        if(this.wagon != null) {
            var index : number = this.wagon.voyageurs.indexOf(this);
            this.wagon.voyageurs.splice(index,1);
			this.wagon = null;
		}
    }
}

class Marchand{
    public nom : string;
    public constructor(nom: string) { this.nom = nom; }
}

class WagonMarchand extends Wagon{
    wagonName: string = "Wagon Marchand";
    private Marchand : Marchand;
    public Affreter(m: Marchand){
        this.Marchand = m;
    }

    public sPrint() : string { 
        return this.wagonName + ":" + this.Marchand.nom;       
	}
}

let v1: Voyageur = new Voyageur("Philémon");
let v2: Voyageur = new Voyageur("Peninna");
let m : Marchand = new Marchand("Far ★ Star");

let w1: WagonVoyageur = new WagonVoyageur();
v1.Monter(w1);
v2.Monter(w1);

let w2: WagonVoyageur = new WagonVoyageur();
w1.Suivant = w2;
v2.Monter(w2);

let w3 : WagonMarchand = new WagonMarchand();
w2.Suivant = w3;
w3.Affreter(m);

let w4 : WagonMarchand = new WagonMarchand();
w3.Suivant = w4;
w4.Affreter(m);

w1.Afficher_train();
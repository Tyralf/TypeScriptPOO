class Fruit{}
class FruitAPeler extends Fruit
{
    public peler(){}
}
class Orange extends FruitAPeler{}
class Banane extends FruitAPeler{}
class Fraise extends Fruit{}

class BrochetteGen<T extends Fruit>
{
    fruits : Array<T> = new Array<T>();
	public embrocher(f : T)
	{
		this.fruits.push(f);
	}
	public debrocher() : T
	{
		if(this.fruits.length == 0) return null;
		var f : T = this.fruits[this.fruits.length - 1];
		this.fruits.pop();
		return f;
	}
}

function compte_sloubifuit(brochette : BrochetteGen<Fruit>)
{
    var count : number = 0;
    var f : Fruit = brochette.debrocher();
    while(f != null)
    {
        count++;
        f = brochette.debrocher();
    }
    console.log("Nombre de fruit debroché : " + count);
}


function pele_mele(brochette : BrochetteGen<FruitAPeler>)
{
    var count : number = 0;
    var f : FruitAPeler = brochette.debrocher();
    while(f != null)
    {
        f.peler();
        count++;
        f = brochette.debrocher();
    }
    console.log("Nombre de fruit debroché et pelé : " + count);
}

function appel_a_peau( brochette : BrochetteGen<FruitAPeler>)
{
    brochette.embrocher(new Orange());
    brochette.embrocher(new Banane());
}

function brochette_fp_fruit(fruit : Fruit)
{
    var brochette_p : BrochetteGen<FruitAPeler> = new BrochetteGen<FruitAPeler>();
    var brochette_f : BrochetteGen<Fruit> = <BrochetteGen<Fruit>>brochette_p;
    brochette_f.embrocher(fruit);
    brochette_p.debrocher().peler();
}


function exemple_banane_p() {
    // Créer une brochette de fruits.
    var brochette : BrochetteGen<Fruit> = new BrochetteGen<Fruit>();
    // Créer une banane.
    var banane = new Banane
    // Embrocher la banane.
    brochette.embrocher(banane)
    // Débrocher un fruit.
    var f : FruitAPeler = <FruitAPeler>brochette.debrocher();
    // Peler le fruit débroché.
    f.peler()
}

// Pseudocode. Ajoutez les casts qui vont bien.
function exemple_fruit_p(fruit : Fruit) {
    // Créer une brochette de fruits.
    var brochette : BrochetteGen<Fruit> = new BrochetteGen<Fruit>();
    // Embrocher le fruit
    brochette.embrocher(fruit) // Erreur STATIQUE Ici car fruit et de type statique Fruit et pas de type fruitAPeler
    // Débrocher un fruit.
    var f : FruitAPeler = <FruitAPeler>brochette.debrocher();
    // Peler le fruit débroché.
    f.peler()
}


function recette4()
{
    var brochette_fruit : BrochetteGen<Fruit>  = new BrochetteGen<Fruit>();
    brochette_fruit.embrocher(new Banane());
    brochette_fruit.embrocher(new Orange());
    brochette_fruit.embrocher(new Fraise());

    var  brochette_banane : BrochetteGen<Banane> = new BrochetteGen<Banane>();
    brochette_banane.embrocher(new Banane());
    brochette_banane.embrocher(new Banane());
    brochette_banane.embrocher(new Banane());

    compte_sloubifuit(brochette_fruit);
    compte_sloubifuit(brochette_banane);

    
    var brochette_fruitAPeler : BrochetteGen<FruitAPeler> = new BrochetteGen<FruitAPeler>();
    brochette_fruitAPeler.embrocher(new Banane());
    brochette_fruitAPeler.embrocher(new Orange());
    brochette_fruitAPeler.embrocher(new Banane());

    brochette_banane.embrocher(new Banane());
    brochette_banane.embrocher(new Banane());
    brochette_banane.embrocher(new Banane());

    brochette_fruit.embrocher(new Banane());
    brochette_fruit.embrocher(new Orange());
    brochette_fruit.embrocher(new Fraise());

    pele_mele(brochette_fruitAPeler);
    pele_mele(brochette_banane);
    //pele_mele(brochette_fruit); //plante ici, etant donnée qu

    brochette_fruitAPeler.embrocher(new Banane());
    brochette_fruitAPeler.embrocher(new Orange());
    brochette_fruitAPeler.embrocher(new Banane());

    brochette_banane.embrocher(new Banane());
    brochette_banane.embrocher(new Banane());
    brochette_banane.embrocher(new Banane());

    brochette_fruit.embrocher(new Banane());
    brochette_fruit.embrocher(new Orange());
    brochette_fruit.embrocher(new Fraise());

    appel_a_peau(brochette_fruitAPeler);
    //appel_a_peau(brochette_fruit); //erreur statique
	appel_a_peau(brochette_banane); 
}

recette4();
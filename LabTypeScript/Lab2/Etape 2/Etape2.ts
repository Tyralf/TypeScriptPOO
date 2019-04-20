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

function recette3()
{
    brochette_fp_fruit(new Banane());
    brochette_fp_fruit(new Fraise());
}

recette3();
class Fruit{}
class FruitAPeler extends Fruit
{
    public peler(){}
}
class Orange extends FruitAPeler{}
class Banane extends FruitAPeler{}
class Fraise extends Fruit{}

class Brochette
{
    fruits : Array<Fruit>  = new Array<Fruit>();
	public embrocher(f : Fruit)
	{
        this.fruits.push(f);
	}
	public debrocher() : Fruit
	{
		if(this.fruits.length == 0) return null;
		var f : Fruit = this.fruits[this.fruits.length - 1];
		this.fruits.pop();
		return f;
	}

}

function exemple_banane() {
    // Créer une brochette de fruits.
    var brochette = new Brochette();
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
function exemple_fruit(fruit : Fruit) {
    // Créer une brochette de fruits.
    var brochette = new Brochette();
    // Embrocher le fruit
    brochette.embrocher(fruit)
    // Débrocher un fruit.
    var f : FruitAPeler = <FruitAPeler>brochette.debrocher();
    // Peler le fruit débroché.
    f.peler()
}

function recette1()
{
	var b : Banane = new Banane();
	var f : Fraise = new Fraise();
	exemple_banane();
	exemple_fruit(b);
	exemple_fruit(f);
}

recette1();
class Hello {
    constructor(what : any){
        this["what"] = what;
    }

    hello(){
        console.log("hello " + (<any>this).what)
    }
}

class Hola extends Hello
{
    hello(){
        super.hello();
        console.log("Hola " + this["what"])
    }
}

var hello = new Hello("world");
hello.hello();

var hola = new Hola("test");
hola.hello();
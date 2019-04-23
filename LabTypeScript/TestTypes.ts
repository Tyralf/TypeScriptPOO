function process(x){
    var proto = x.prototype
    x.prototype["name"] = "foo";
    var v = x + x;
    console.log(v + x.name);
}

process("Hello ");
process(10);
process(false);

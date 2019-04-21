
function strinit (Klass : any , data : string )
{
    var dataSplit = data.split(",");
    var t = Klass.constructor(...dataSplit)
    
    return Klass;   
}

    function csvinit (col : string, data : string){
        
        
        var dataSplit = data.split(",")
        var cols = col.split(",")
        var myObject = Object
        
        cols.forEach(col => {
            myObject[col] = ""
        });

        myObject.constructor = function (...args: string[])
        {
            for (let index = 0; index < cols.length; index++) {
                this[cols[index]] = args[index];
            }
        }

        var instance = strinit(myObject, data)
        return instance;
        
    }
    
    var personne = csvinit("prenom,nom", "Jon,Snow");

    console.log(personne);

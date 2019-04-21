
export namespace Model {
    function csvinit2 (fileName : string, col : string, data : string){
        var dataSplit = data.split(",")
        var cols = col.split(",")
        var className = fileName.split(".")[0];
        className = className[0].toUpperCase() + className.substring(1,className.length);

        var myObject = Model[className]
        myObject.prototype.constructor()
        var instance = myObject.prototype

        for (let index = 0; index < cols.length; index++) {
            switch (cols[index]) {
                case "nom":
                    instance["setNom"](dataSplit[index])
                    break;
                
                case "decisive":
                    instance["setDecisive"](dataSplit[index] == "true")
                    break;

                default:
                    var subClassName = cols[index][0].toUpperCase() + cols[index].substring(1,cols[index].length);
                    var t = Model[subClassName].prototype
                    t.constructor(dataSplit[index])
                    instance["set" + subClassName](t);
                    break;
            }        
        }
        return instance;
    }

    export class Bataille {
        private nom : string;
        public setNom(value : string ) { this.nom = value; }
        public getNom() : string { return this.nom; }
        private annee : Annee;
        public setAnnee(value : Annee) { this.annee = value; }
        public getAnnee() : Annee { return this.annee; }
        private decisive : boolean;
        public setDecisive(value : boolean) { this.decisive = value; }
        public getDecisive() : boolean { return this.decisive; }

        public toString() : string {
            // TODO
            return this.nom + " " + this.annee.toString() + " " + this.decisive ;
        }
        constructor() {}
    }

    export class Annee {
        /** Numéro de l’année: ne peut être négatif ou nul*/
        numero : number;

        /** AC=après la conquête de Aegon et l’arrivée à PortRoyal */
        ac : boolean;

        constructor(s : string) {
            var params = s.split(" ");
            this.numero = parseInt(params[0]);
            this.ac = params[1] == "AC";
        }

        public toString() : string{
            return this.numero + " " + (this.ac ? "AC" : "BC");
        }
    }

   var output =  csvinit2("bataille.csv","nom,annee,decisive", "Massacre à Durlieu,302 AC,true");

   console.log(output.toString());

}

function Voiture(newImmatriculation,newColor,newWeight,newPower,newFuelCapacity,newNbPlace){
    var immatriculation;
    var color;
    var weight;
    var power;
    var fuelCapacity ;
    var nbPlace;
    var fuelLevel = 5 ;
    var insured = false;
    var boardMsg = "Welcome aboard";
    
    const COLORS = [blue, green, red, yellow, purple, white, black, brown];
    const TYPEDEROUTE = {
        "ville": 10,
        "route": 5,
        "autoroute": 8,
        "circuit": 12
    }
    

    //Getters and Setters

    // setters
    var setImmatriculation=function(newImmatriculation){
        if (!newImmatriculation) throw new Error("immatricuation:champ obligatoire");
        else if(newImmatriculation.length >= 4) immatriculation = newImmatriculation;
        else throw new Error("immatricuation: Au moins 4 caractères");
    };

    var setColor=function(newColor){
        if (!newImmatriculation) throw new Error("color:champ obligatoire");
        else if(newImmatriculation.length >= 0) color = newColor;
        else throw new Error("color: Au moins 1 caractères");
    }

    var setWeight=function(newWeight){
        if(isNaN(newWeight) )throw new Error("weight: nombre attendu");
        else if(newWeight <= 0) throw new Error("weight: nombre négatif");
        else if(!newWeight) throw new Error("weight: Entrer un nombre");
        else weight = newWeight;
        
    };
    var setPower=function(newPower){
        if (isNaN(newPower)) throw new Error("power:champ obligatoire");
        else if(newPower <= 0) throw new Error("power: nombre négatif");
        else if (!newPower) throw new Error("power: Veuillez entrer un nombre");
        else power = newPower;
    };

    var setFuelCapacity=function(newFuelCapacity){
        if(isNaN(newFuelCapacity) )throw new Error("fuel capacity: nombre attendu");
        if(newFuelCapacity <= 0) throw new Error("fuel capacity: nombre négatif");
        else if (!newFuelCapacity) throw new Error("power: Veuillez entrer un nombre");
        else fuelCapacity = newFuelCapacity;
    };

    var setNbPlace = function(newNbPlace){
        if(isNaN(newNbPlace) )throw new Error("fuel capacity: nombre attendu");
        if(newNbPlace <= 0) throw new Error("fuel capacity: nombre négatif");
        else if (!newNbPlace) throw new Error("power: Veuillez entrer un nombre");
        else nbPlace = newNbPlace;
    };

    this.setInsured=function(newInsured){
        if(newinsured==false ||newInsured==true ) insured = newInsured;
        else throw new Error("insured:Entrez true or false")
    };

    this.setBoardMsg=function(newMsg){
        if (!msg) throw new Error("board:ne laissez pas le champs vide");
        else if(msg.length > 1) boardMsg = msg;
        else throw new Error("bord:Au moins 2 caractères");
    };

    this.setFuelLevel=function(newFuelLevel){
        if(isNaN(newFuelLevel) )throw new Error("fuel level: nombre attendu");
        else if(newFuelLevel <= 0) throw new Error("fuel level: nombre négatif");
        else if (!newFuelLevel) throw new Error("power: Veuillez entrer un nombre");
        else fuelLevel = newFuelLevel;
    };

    // getters
    this.getImmatriculation=function(){return immatriculation};
    this.getColor=function(){return color};
    this.getWeight=function(){return weight};
    this.getPower=function(){return power};
    this.getFuelCapacity=function(){return fuelCapacity};
    this.getNbPlace=function(){return nbPlace};
    this.getInsured=function(){return insured};
    this.getBoardMsg=function(){return boardMsg};
    this.getFuelLevel=function(){return fuelLevel};

    // Initialisation
    setImmatriculation(newImmatriculation);
    setColor(newColor);
    setWeight(newWeight);
    setPower(newPower);
    setFuelCapacity(newFuelCapacity);
    setNbPlace(newNbPlace);
    console.log(this.getBoardMsg());
    // Action


    //toString
     
    //Methods

    /**Méthode exposée : Repeindre la voiture La classe Voiture expose la méthode repeindre() qui admet en paramètre le libellé de la nouvelle couleur. Si cette nouvelle couleur est identique à la couleur courante, la méthode génère simplement un message remerciant pour ce rafraîchissement ; s'il s'agit d'une couleur différente, il la mémorise dans l'attribut correspondant et génère un autre message de remerciement. Cette méthode pourrait aussi bien retourner un code d'erreur, par exemple un booléen true si tout va bien ou false sinon.
     * 
     * @param {Color} anyColour of COLORS
     */
    this.rePaint = function(anyColor) {
        if (!anyColor) {
            throw new Error("Entrer la nouvelle couleur désirée");
        }
        if (!COLORS.includes(anyColor)) {
            throw new Error("Cette couleur n'est pas disponible");
        }
        if (anyColor == color) {
            console.log("La couleur est la même, mais merci pour ce rafraîchissement.");
        } else {
            console.log(this.name + ", votre voiture " + this.color + ", a été repeinte en " + anyColor + ".");
            this.color = anyColor;
        }
    }

    /**Méthode exposée : Faire l'appoint d'essence La classe Voiture expose la méthode mettreEssence() qui admet en paramètre une quantité de carburant à ajouter au réservoir. Cette méthode effectue tout d'abord un test pour savoir si cette quantité est compatible avec le niveau d'essence courant du véhicule ; si tout va bien, elle ajoute le carburant et génère un message de feed-back, sinon, elle refuse cet appoint de carburant et génère un message d'erreur. Cette méthode doit retourner au programme appelant le nouveau niveau de carburant.
     * 
     * @param {Number} anyGasQuantity 
     */
    this.fillGas = function(anyGasQuantity) {
        if (!anyGasQuantity) {
            throw new Error("Entrer une quantité d'essence.")
        }
        if (isNaN(anyGasQuantity)) {
            throw new Error("Exprimer la quantité d'essence à l'aide d'un nombre.");
        }
        if (anyGasQuantity <= 0) {
            throw new Error("La quantité doit être supérieur à 0.")
        }
        if (anyGasQuantity >= gasQuantity) {
            throw new Error("La quantité indiquée est trop importante pour la capacité du réservoir.")
        }
        console.log("Ajout de " + anyGasQuantity + "L d'essence.\n" + this.name + ", votre voiture, dispose désormais de " + gasQuantity + "L d'essence.");
        gasQuantity = anyGasQuantity;

    }

    /**move
     * Méthode exposée : Se déplacer C'est bien le but d'un véhicule ! La classe Voiture expose la méthode seDeplacer() qui admet en paramètres la distance parcourue en km et la vitesse moyenne du déplacement. En fonction de ces deux paramètres, la méthode calcule tout d'abord la consommation de carburant selon la règle de gestion (très simplifiée) : • Consommation de 10 l aux 100 km en ville, soit à une vitesse moyenne inférieure à 50 km/h ; • Consommation de 5 l aux 100 km en sur route, soit à une vitesse moyenne comprise entre 50 et 90 km/h ; • Consommation de 8 l aux 100 km en sur autoroute, soit à une vitesse moyenne comprise entre 90 et 130 km/h ; • Consommation de 12 l aux 100 km pour une vitesse moyenne supérieure à 130 km/h (et on ne parle pas des retraits de points de permis...) ; Conseil Ce calcul élémentaire de consommation pourrait bien faire l'objet d'une nouvelle méthode privée qui serait alors réutilisable par la classe elle-même... D'après cette consommation nécessaire de carburant, la méthode détermine si ce trajet est possible en fonction du niveau d'essence courant. Si ce n'est pas le cas, elle génère un message d'erreur. Et si tout va bien, elle déduit la consommation calculée et génère un message indiquant cette consommation.
     * @param {Number} distance parcourue en km
     * @param {TYPEDEROUTE} Choisir un type de route dont on déduira une moyenne de L essence/km consommé 
     */
    this.move = function(anyDistance, anyTypeDeRoute) {
        if (!anyDistance || anyDistance < 0) { throw new Error("Entrer une distance à parcourir.") };
        if (!anyTypeDeRoute || !isNaN(anyTypeDeRoute) || !TYPEDEROUTE.includes(anyTypeDeRoute)) { throw new Error("Choisissez un type de route parmi : " + TYPEDEROUTE) };

        let conso = distance * TYPEDEROUTE / 100;
        if (conso > fuelLevel) {
            throw new Error("La voiture n'a pas assez d'essence !");
        }
        fuelLevel -= conso;
        console.log(this.name + ", votre voiture, a parcouru " + anyDistance + "km de " + anyTypeDeRoute + "\n" + fuelLevel + "L restants.");

    }

    /**toString
     * 
     * @returns retourne toutes les informations de l'instance d'objet
     */
    this.toString = function() {
        return "Immatriculation : " + immatriculation + "\n" +
            "color : " + color + "\n" +
            "weight : " + weight + "\n" +
            "power : " + power + "\n" +
            "fuelCapacity : " + fuelCapacity + "\n" +
            "insured : " + insured + "\n" +
            "boardMsg : " + boardMsg + "\n";

    }
}


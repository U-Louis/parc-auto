//Methods
function Voiture(newImmatriculation, newColor, newWeight, newPower, newFuel, newNbPlace) {
    var immatriculation;
    var color
    var weight;
    var power;
    var fuelCapacity;
    var nbPlace;
    var insured;
    var boardMsg;

    const TYPEDEROUTE = {
        "ville": 10,
        "route": 5,
        "autoroute": 8,
        "circuit": 12
    }


    //Getters and Setters
    var setImmatriculation = function() {};
    var setWeight = function() {};
    var setPower = function() {};
    var setFuelCapacity = function() {};
    var setNbPlace = function() {};
    this.setInsured = function() {};
    this.setBordMsg = function() {};

    this.getImmatriculation = function() {};
    this.getWeight = function() {};
    this.getPower = function() {};
    this.getFuelCapacity = function() {};
    this.getNbPlace = function() {};
    this.getInsured = function() {};
    this.getBordMsg = function() {};

    // Initialisation

    // Action



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
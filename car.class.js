
function Voiture(newImmatriculation,newColor,newWeight,newPower,newFuel,newNbPlace){
    var immatriculation;
    var color
    var weight;
    var power;
    var fuelCapacity ;
    var nbPlace;
    var insure;
    var boardMsg;

    

    //Getters and Setters



    var setImmatriculation=function(){};
    var setWeight=function(){};
    var setPower=function(){};
    var setFuelCapacity=function(){};
    var setNbPlace=function(){};
    this.setInsure=function(){};
    this.setBordMsg=function(){};

    this.getImmatriculation=function(){};
    this.getWeight=function(){};
    this.getPower=function(){};
    this.getFuelCapacity=function(){};
    this.getNbPlace=function(){};
    this.getInsure=function(){};
    this.getBordMsg=function(){};
    // Initialisation

    // Action


    //toString
     
=======
//Methods

/**Méthode exposée : Repeindre la voiture La classe Voiture expose la méthode repeindre() qui admet en paramètre le libellé de la nouvelle couleur. Si cette nouvelle couleur est identique à la couleur courante, la méthode génère simplement un message remerciant pour ce rafraîchissement ; s'il s'agit d'une couleur différente, il la mémorise dans l'attribut correspondant et génère un autre message de remerciement. Cette méthode pourrait aussi bien retourner un code d'erreur, par exemple un booléen true si tout va bien ou false sinon.
 * 
 * @param {Color} anyColour of COLORS
 */
this.rePaint = function(anyColor) {
    if (!anyColor) {
        console.error("Entrer la nouvelle couleur désirée");
    }
    if (!COLORS.includes(anyColor)) {
        console.error("Cette couleur n'est pas disponible");
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
        console.error("Entrer une quantité d'essence.")
    }
    if (isNaN(anyGasQuantity)) {
        console.error("Exprimer la quantité d'essence à l'aide d'un nombre.");
    }
    if (anyGasQuantity <= 0) {
        console.error("La quantité doit être supérieur à 0.")
    }
    if (anyGasQuantity >= gasQuantity) {
        console.error("La quantité indiquée est trop importante pour la capacité du réservoir.")
    }
    console.log("Ajout de " + anyGasQuantity + "L d'essence.\n" + this.name + ", votre voiture, dispose désormais de " + gasQuantity + "L d'essence.");
    gasQuantity = anyGasQuantity;

}
}

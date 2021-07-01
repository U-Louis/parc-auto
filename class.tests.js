function testAppelClass(){
    var voiture1 = new Voiture("3636", "red", 1500, 50, 100, 4);
    console.log(voiture1.toString());
}

//TESTS

//scenario nominal
var voiture1 = new Voiture(3636, "red", 1500, 50, 100, 5, 4);


//Donnees membres
//
//


//Methods

//Method rePaint(anyColor)
let jeuEssaiRePaint = [undefined, null, 0, 1564, "3512", "hjyfjyf", "blue", "red"];

for (let i = 0; i < jeuEssaiRePaint.length; i++) {
    try {
        voiture1.rePaint(jeuEssaiRePaint[i]);
    } catch (e) {
        console.log(e);
    }
}

//Method fillGas(anyGasQuantity)
let jeuEssaiFillGas = [undefined, null, 0, 15604, "12", "645631", "hjyfjyf", "blue", "red"];

for (let i = 0; i < jeuEssaiFillGas.length; i++) {
    try {
        voiture1.fillGas(jeuEssaiFillGas[i]);
    } catch (e) {
        console.log(e);
    }
}


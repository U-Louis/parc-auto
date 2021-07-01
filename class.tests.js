//TESTS

//scenario nominal
var voiture1 = new Voiture(3636, "red", 1500, 50, 100, 5, 4);

voiture1.toString();
voiture1.fillGas(40);
voiture1.move(25, "route");
voiture1.fillGas(40);
voiture1.move(10, "autoroute");


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

//Method move(anyDistance, anyTypeDeRoute)
let elements = [undefined, null, 0, 15604, "12", "645631", "hjyfjyf", "blue", "red"];
let jeuEssaiMove = [];

for (let i = 0; i < jeuEssaiMove.length; i++) {
    for (let j = i; j < jeuEssaiMove.length; j++) {
        jeuEssaiMove.push([elements[i], elements[j]]);

    }
}

for (let i = 0; i < jeuEssaiMove.length; i++) {
    try {
        voiture1.move(jeuEssaiMove[i][0], jeuEssaiMove[i][1]);
    } catch (e) {
        console.error("input : " + jeuEssaiMove[i][0] + " + " + jeuEssaiMove[i][1] + " error : " + e);
    }
}
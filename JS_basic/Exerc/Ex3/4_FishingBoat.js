function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let count = Number(input[2]);
    let boatPrice = 0;
    let discount = 0;

    switch (season) {
        case "Spring":
            boatPrice = 3000;
            break;
        case "Summer":
        case "Autumn":
            boatPrice = 4200;
            break;
        case "Winter":
            boatPrice = 2600;
            break;
    }
    if (count <= 6) {
        boatPrice -= (boatPrice * 0.1);
    }
    else if (count >= 7 && count <= 11) {
        boatPrice -= (boatPrice * 0.15);
    }
    else if (count >= 12) {
        boatPrice -= (boatPrice * 0.25);
    }
    if (count % 2 == 0 && season !== "Autumn") {
        boatPrice -= (boatPrice * 0.05);
    }

    if (budget >= boatPrice) {
        console.log(`Yes! You have ${(budget - boatPrice).toFixed(2)} leva left.`);
    }
    else { console.log(`Not enough money! You need ${(boatPrice - budget).toFixed(2)} leva.`); }
}
fishingBoat(["2000" ,
"Winte",
"13"]);
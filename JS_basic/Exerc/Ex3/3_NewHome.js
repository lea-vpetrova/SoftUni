function newHouse(input) {
    let flowerName = input[0];
    let flowerQuantity = Number(input[1]);
    let budget = Number(input[2]);
    let flowerPrice = 0;
    let discount = 0;

    switch (flowerName) {
        case "Roses":
            flowerPrice = 5 * flowerQuantity;
            if(flowerQuantity > 80)
            {discount = flowerPrice * 0.1;}
            flowerPrice -= discount;
            break;  
        case "Dahlias":
            flowerPrice = 3.80 * flowerQuantity;
            if (flowerQuantity >90) {
                discount =flowerPrice* 0.15;
            }
            flowerPrice -= discount;
            break;
        case "Tulips":
            flowerPrice = 2.80 * flowerQuantity;
            if (flowerQuantity >80) {
                discount = flowerPrice*0.15;
            }
            flowerPrice -= discount;
            break;
        case "Narcissus":
            flowerPrice = 3*flowerQuantity;
            if (flowerQuantity <120) {
                discount = flowerPrice*0.15;
            }
            flowerPrice += discount;
            break;
        case "Gladiolus":
            flowerPrice = 2.50 * flowerQuantity;
            if (flowerQuantity < 80) {
                discount = flowerPrice * 0.2;
            }
            flowerPrice += discount;
            break;
    }

    if (budget > flowerPrice) {
        console.log(`Hey, you have a great garden with ${flowerQuantity } ${flowerName } and ${(budget - flowerPrice).toFixed(2) } leva left.`);
    }
    else {
        console.log(`Not enough money, you need ${(flowerPrice - budget).toFixed(2)} leva more.`);
    }

}
newHouse(["Tulips",
    "88",
    "260"]);
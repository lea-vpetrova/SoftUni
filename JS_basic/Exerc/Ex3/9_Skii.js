function skii(input) {
    let nights = Number(input[0]) - 1;
    let roomType = input[1];
    let opinion = input[2];
    let price = 0;
    switch (roomType) {
        case "room for one person":
            price = 18 * nights;
            break;
        case "apartment":
            price = 25 * nights;
            if (nights < 10) {
                price -= price * 0.3;
            }
            else if (nights >= 10 && nights <= 15) {
                price -= price * 0.35;
            }
            else { price -= price * 0.5; }
            break;
        case "president apartment":
            price = 35 * nights;
            if (nights < 10) {
                price -= price * 0.1;
            }
            else if (nights >= 10 && nights <= 15) {
                price -= price * 0.15;
            }
            else { price -= price * 0.2; }
            break;
    }
    if (opinion == "positive") {
        price += price * 0.25;
    }
    else if (opinion === "negative") {
        price -= price * 0.1;
    }
    console.log(price.toFixed(2));
}
skii(["2",
    "apartment",
    "positive"]);
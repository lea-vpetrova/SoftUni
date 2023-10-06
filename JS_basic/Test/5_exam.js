function puppyCare(input) {
    let pupFood = Number(input[0]) * 1000;
    let pupEat = input[1];
    let index = 2;
    let eated = 0;
    while (pupEat !== "Adopted") {
        eated += Number(pupEat);
        pupEat = input[index];
        index++;
    }

    if (pupFood >= eated) {
        console.log(`Food is enough! Leftovers: ${pupFood - eated} grams.`);
    }
    else {
        console.log(`Food is not enough. You need ${eated - pupFood} grams more.`);
    }
}
puppyCare(["4",
    "130",
    "345",
    "400",
    "180",
    "230",
    "120",
    "Adopted"]);
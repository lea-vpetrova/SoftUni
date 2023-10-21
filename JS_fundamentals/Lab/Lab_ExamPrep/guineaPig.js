function guineaPig(input) {
    let quantityFood = Number(input[0])*1000;
    let quantityHey = Number(input[1]) * 1000;
    let quantityCover = Number(input[2]) * 1000;
    let weight = Number(input[3]) * 1000;
    let coverConsumption = weight/3;
    for (let i = 1; i <= 30; i++) {
        quantityFood -= 300;
        if (i%2 == 0) {
            quantityHey -= quantityFood*0.05;
        }
        if (i % 3 == 0 ) {
            quantityCover -= coverConsumption;
        }

        if (quantityFood < 0 || quantityHey < 0 || quantityCover < 0 ) {
            console.log('Merry must go to the pet store!');
            return;
        }
    }
    console.log(`Everything is fine! Puppy is happy! Food: ${(quantityFood/1000).toFixed(2)}, Hay: ${(quantityHey/1000).toFixed(2)}, Cover: ${(quantityCover/1000).toFixed(2)}.`);
}
guineaPig(["1",

    "1.5",

    "3",

    "1.5"

]);
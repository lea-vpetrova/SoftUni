function petShop(input) {
    let dogFoodCount = Number(input[0]);
    let catFoodCount = Number(input[1]);
    let finalSum = dogFoodCount*2.50 + catFoodCount*4;
    console.log(`${finalSum} lv.`);
}
petShop(["5","4"]);
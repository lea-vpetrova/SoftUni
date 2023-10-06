function toyStory(input) {
    let exPrice = Number(input[0]);
    let puzzle = Number(input[1]) * 2.60;
    let doll = Number(input[2])*3;
    let teddyBear = Number(input[3])*4.10;
    let minion = Number(input[4])*8.20;
    let truck = Number(input[5])*2;
    let toyCount = 0, toySum = 0.00, discount = 0, rent =0;
    toyCount = Number(input[1]) + Number(input[2]) + Number(input[3]) + Number(input[4]) + Number(input[5]);
    toySum = puzzle + doll + teddyBear + minion+ truck;
    if(toyCount >=50) discount = 0.25 * toySum; 
    rent = 0.1*(toySum-discount);
    let finalMoney = toySum - discount - rent;
    
    if (exPrice < finalMoney) console.log(`Yes! ${(finalMoney - exPrice).toFixed(2)} lv left.`);
    else if (exPrice > finalMoney) console.log(`Not enough money! ${(exPrice - finalMoney).toFixed(2)} lv needed.`);
}
toyStory(["320",
    "8",
    "2",
    "5",
    "5",
    "1"]);

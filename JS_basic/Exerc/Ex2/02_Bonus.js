function bonusPoints(input) {
    let startingPoints = Number(input[0]);
    let bonusPoints = 0;
    let aBonus =0;
    if(startingPoints <= 100) bonusPoints += 5;
    else if(startingPoints > 100 && startingPoints<=1000) bonusPoints += startingPoints*0.2;
    else bonusPoints += startingPoints*0.1;
    if(startingPoints %2==0) aBonus++;
    else if(startingPoints % 10 == 5 ) aBonus += 2;
    let finalPoints = startingPoints + aBonus + bonusPoints;
    console.log(bonusPoints+aBonus);
    console.log(finalPoints);

}
bonusPoints(["2703"]);
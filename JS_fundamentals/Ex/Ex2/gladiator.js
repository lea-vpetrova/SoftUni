function gladExpenses(lostFights,helmet,sword,shield,armor) {
    let expenses = 0;
    let HBroke = Math.floor(lostFights/2);
    let SBroke = Math.floor(lostFights / 3);
    let ShBroke = Math.floor(lostFights / 6);
    let ABroke = Math.floor(lostFights / 12);
    expenses = helmet*HBroke + sword* SBroke + shield*ShBroke +armor*ABroke;
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
gladExpenses(7,

    2,

    3,

    4,

    5);
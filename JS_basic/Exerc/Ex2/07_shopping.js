function shopping(input) {
    let budget = Number(input[0]);
    let N = Number(input[1]) *250;
    let M = Number(input[2]) * (N*0.35);
    let P = Number(input[3]) * (N*0.1);
    let spending = N+M+P;
    if (Number(input[1]) > Number(input[2])) spending -= spending*0.15;
    if (budget >= spending) console.log(`You have ${(budget - spending).toFixed(2)} leva left!`);
    else console.log(`Not enough money! You need ${(spending-budget).toFixed(2)} leva more!`);
}
shopping(["920.45",
    "3",
    "1",
    "1"]);

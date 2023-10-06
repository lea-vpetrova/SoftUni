function repairing(input) {
    let naylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let hours = Number(input[3]);
    let sum = ((naylon+2)*1.50 + (paint+paint*0.10)*14.50 + thinner*5.00+0.40);
    let sumWorkers = (sum*0.3)*hours;
    let price = sum +sumWorkers;
    console.log(price);
}
repairing(["10","11","4","8"]);
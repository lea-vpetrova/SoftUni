function solve(centuries) {
    let years = centuries*100;
    let days = Math.trunc(years*365.2422);
    let hours = 24*days;
    let mins = 60*hours;
    console.log(`${centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${mins} minutes`);
}
solve(1);
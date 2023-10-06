function easter(input) {
    let brPastry = Number(input[0]);
    let bakerName = '';
    let rate ='';
    let first =0;
    for (let i = 1; i <= brPastry; i++) {
        bakerName = input[i];
        while (rate !== "Stop") {
            let index = brPastry;
            rate += (Number(input[index]));
            index++;
        }
        console.log(`${bakerName} has ${rate} points.`);
        if (rate > first) {
            first = rate;
            console.log(`${bakerName} is the new number 1!`);
        }
    }
    console.log(`${bakerName} won competition with ${first} points!`);
}
easter(["3",
    "Chef Manchev", "10",
    "10",
    "10",
    "10",
    "Stop",
    "Natalie",
    "8",
    "2",
    "9",
    "Stop",
    "George",
    "9",
    "2",
    "4", "2",
    "Stop"]);
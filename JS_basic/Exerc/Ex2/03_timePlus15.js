function timePlus15(input) {
    let hour = Number(input[0]);
    let min = Number(input[1]);
    let futureMin = min +15;
    let temp = 0;
    if (futureMin >= 60)
    {
        hour++ ;
        temp = futureMin % 60;
    }
    else temp = futureMin;
    if(hour > 23) hour = 0;
    if(temp<10) console.log(`${hour}:0${temp}`);
    else console.log(`${hour}:${temp}`);
}
timePlus15(["23","45"]);
function worldRecord(input) {
    let record = Number(input[0]);
    let dist = Number(input[1]);
    let timeFor1M = Number(input[2]);
    let waterRes = 12.5;
    let totalTime = dist * timeFor1M;
    let resistance = Math.floor(dist / 15);
    let finalTime = totalTime + (resistance * waterRes);

    if (finalTime < record) console.log(`Yes, he succeded! The new world record is ${finalTime.toFixed(2)} seconds.`);
    else console.log(`No, he failed! He was ${(finalTime - record).toFixed(2)} seconds slower.`);

}
worldRecord(["55555.67",
    "3017", "5.03"]);

function skeleton(input) {
    let minutes = Number(input[0]);
    let seconds = Number(input[1]);
    let len = Number(input[2]);
    let secFor100 = Number(input[3]);

    let controla = minutes*60 + seconds;
    let late = (len/120)*2.5;
    let compTime = (len/100 )*secFor100 - late;

    if (controla >= compTime) {
        console.log("Marin Bangiev won an Olympic quota!");
        console.log(`His time is ${compTime.toFixed(3)}.`);
    }
    else{
        console.log(`No, Marin failed! He was ${(compTime - controla).toFixed(3)} second slower.`);
    }
}
skeleton(["2","12","1200","10"]);
function sameNums(number) {
    let strN = String(number);
    let isSame = true;
    let sum = Number(strN[0]);
    for (let i = 1; i < strN.length; i ++) {
        strN[i-1] != strN[i] ? isSame=false: isSame;
        sum += Number(strN[i]);
    }

    console.log(isSame);
    console.log(sum);
}
sameNums(1234);
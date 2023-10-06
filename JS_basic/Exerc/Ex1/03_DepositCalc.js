function depositCalc(input) {
    let depositSum = Number(input[0]);
    let depositTime = Number(input[1]);
    let annualInterestPrecent = Number(input[2])/100;
    let sum = depositSum + depositTime*((depositSum*annualInterestPrecent)/12);
    console.log(sum);
}
depositCalc(["200","3","5.7"]);
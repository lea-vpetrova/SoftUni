function sumOfNum(input) {
    let num = Number(input[0]);
    let index = 1;
    let sum=0;
     
    while (num > sum) {
        let numbers = Number(input[index]);
        sum += numbers;
        index++;
    }
    console.log(sum);
}
sumOfNum(["100","10","20","30","40"]);
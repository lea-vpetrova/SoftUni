function oddAndEvenSum(num) {
    let str = String(num);
    let sumO =0;
    let sumE = 0;
    let check = (numb) => numb%2==0 ? sumE+=numb:sumO+= numb;
    for(let i in str){
        let curNum = Number(str[i]);
        check(curNum);
    }
    console.log(`Odd sum = ${sumO}, Even sum = ${sumE}`);
}
oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);
function sum(numb) {
    let str = String(numb);
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum += Number(str[i]);
    }
    console.log(sum);
}
sum(97561);
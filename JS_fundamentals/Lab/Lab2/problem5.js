function sumEven(arr) {
    let sum =0;
    for(let el in arr){
        let num = Number(arr[el]);
        if (num % 2 ==0) {
            sum+=num;
            
        }
    }
   console.log(sum);
}
sumEven(['3', '5', '7', '9']);
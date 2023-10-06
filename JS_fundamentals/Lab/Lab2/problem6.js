function subEvenAndOdd(arr) {
    let sumE = 0;
    let sumO =0;
    for (let el in arr) {
        let num = Number(arr[el]);
        if (num % 2 == 0) {
            sumE += num;
        }
        else{
            sumO += num;
        }
    }
    console.log(sumE - sumO);
}
subEvenAndOdd([1, 2, 3, 4, 5, 6]);
subEvenAndOdd([3, 5, 7, 9]);

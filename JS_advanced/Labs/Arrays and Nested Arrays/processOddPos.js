function processOddPos(arr) {
    let result =[];
    for (let i = 0; i < arr.length; i++) {
        if (i%2 !== 0) {
            result.push(arr[i]);
        }
    }
    result = result.map(el => el*2).reverse();
    console.log(result.join(' '));
}
processOddPos([3, 0, 10, 4, 7, 3]);
function aggElm(arr) {
    let sum =0;
    let weirdSum = 0;
    let concat = '';
    for (let num of arr) {
        sum += num;
        weirdSum += 1/num;
        concat += num;
    }
    console.log(sum);
    console.log(weirdSum);
    console.log(concat);
}
aggElm([2, 4, 8, 16]);
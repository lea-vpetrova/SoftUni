function processOddNumbers(arr) {
    let oddIndex = arr.filter((x,i) => i%2==1);
    let doubled = oddIndex.map(x => x*2);
    let result = doubled.reverse();
    console.log(result.join(' '));
}
processOddNumbers([10, 15, 20, 25]);
function negPosNum(arr) {
    let result =[];
    let el = arr.map(a=> a<0? result.unshift(a): result.push(a));
    console.log(result.join('\n'));
}
negPosNum([7, -2, 8, 9])
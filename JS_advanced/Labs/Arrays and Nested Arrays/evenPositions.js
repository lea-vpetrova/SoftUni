function evenPositions(arr) {
    arrResult = [];
    arr.map(i => {if(arr.indexOf(i)%2==0) arrResult.push(i)});
    console.log(arrResult.join(' '));
}
evenPositions(['20', '30', '40','50', '60']);
function numSeq(n,k) {
    let arrResult = [1];
    for (let i = 1; i < n; i++) {
        let el = (arrResult.slice(i,i-k).reduce((acc,curr) => acc+curr));
        arrResult.push(el);
    }
    console.log(arrResult);
}
numSeq(6, 3);
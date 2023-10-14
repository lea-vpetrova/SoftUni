function matrixNxN(n) {
    for (let row = 0; row < n; row++) {
        let curRow = `${n} `.repeat(n);
        console.log(curRow);
    }
}
matrixNxN(3);
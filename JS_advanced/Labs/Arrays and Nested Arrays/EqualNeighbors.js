function neighbors(matrix) {
    let row, col;
    let count=0;
    for (row = 0; row < matrix.length; row++) {
        for (col = 0; col < matrix[row].length; col++) {
            if (row < matrix.length - 1 && matrix[row][col]=== matrix[row + 1][col]) {
                count++;
            }
            if (col < matrix[row].length - 1 && matrix[row][col]=== matrix[row][col + 1]) {
                count++;
            }
        }
    }
    console.log(count);
}
neighbors([['test', 'yes', 'yo', 'ho'], ['well', 'done', 'yo', '6'], ['not', 'done', 'yet', '5']]);
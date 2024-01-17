function diagonalSum(matrix) {
    let row,col,sumRDiag=0,sumLDiag=0;
    for ( row = 0; row < matrix.length; row++) {
        for ( col = 0; col < matrix[row].length; col++) {
            if(row == col){
                sumLDiag += Number(matrix[row][col]);
            }
            if ((row + col) == matrix.length - 1) {
                sumRDiag += Number(matrix[row][col]);
            }
        }
    }
    console.log(`${sumLDiag} ${sumRDiag}`);
}
diagonalSum([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);
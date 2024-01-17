function biggestEl(matrix) {
    let arr=[];
    for (let row of matrix) {
        for(let nums of row){
            arr.push(nums);
        }
    }
    let biggestNum = Math.max(...arr);
    console.log(biggestNum);
}
biggestEl([[20, 50, 10],[8, 33, 145]]);
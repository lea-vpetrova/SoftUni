function solve(arr) {
    const cond = [];
    if (arr.length == 1) console.log(arr[0]);
    while (arr.length !== 0) {
        for (let index = 0; index < arr.length - 1; index++) {
            cond.length = arr.length - 1;
            cond[index] = arr[index] + arr[index + 1];
            arr[index] = cond[index];
        }
        arr.length--;
    }
    console.log(cond.join(" "));
}
solve([2, 10, 3]);
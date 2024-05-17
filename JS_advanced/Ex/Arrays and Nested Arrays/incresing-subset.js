function increasingSubset(arr) {
    let prev = arr.shift();
    const result =[prev];
    for (const num of arr) {
        if (prev < num) {
            result.push(num);
            prev = num;
        }
    }
    console.log("[" +result.join(', ')+"]");
}
increasingSubset([20, 3, 2, 15, 6, 1]);

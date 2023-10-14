function smallest2Numbers(arr) {
    let sortArr = arr.sort((a, b) => a - b);
    let smallestNums = sortArr.slice(0,2);
    console.log(smallestNums.join(' '));
}
smallest2Numbers([30, 15, 50, 5]);
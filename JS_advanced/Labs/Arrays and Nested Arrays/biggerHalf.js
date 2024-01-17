function biggerHalf(arr) {
    let sorted = arr.sort((a,b)=> b-a);
    let bigger = sorted.splice(0, Math.ceil(arr.length/2));
    console.log(bigger.reverse());
}
biggerHalf([3, 19, 14, 7, 2, 19, 6]);
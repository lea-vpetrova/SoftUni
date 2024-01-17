function smallestTwo(arr) {
    let sorted = arr.sort((a,b)=> b-a);
    let result = [];
    result.push(sorted.pop());
    result.push(sorted.pop());
    console.log(result.join(' '));
}
smallestTwo([30, 15, 50, 5]);
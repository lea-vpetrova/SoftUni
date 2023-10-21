function numbers(str) {
    let arr = str.split(' ').map(Number);
    let avg = 0;
    for (let num of arr) {
        avg += num;
    }
    avg /= arr.length;
    let top5 = arr
        .filter(num => num > avg)
        .sort((a,b) => b-a)
        .splice(0,5);

    if (top5.length == 0) {
        console.log('No');
    }
    else{
        console.log(top5.join(' '));
    }
}
numbers('-1 -2 -3 -4 -5 -6');
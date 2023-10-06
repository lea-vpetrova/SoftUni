function prANDsum(start,end) {
    let sum = 0;
    let temp = '';
    for (let index = start; index <= end; index++) {
        temp += `${index} `;
        sum += index;
    }
    console.log(temp);
    console.log(`Sum: ${sum}`);
}
prANDsum(5,10);
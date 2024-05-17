function rotate(arr, rotateCount) {
    for (let i = 0; i < rotateCount; i++) {
        let rotation = arr.pop();
        arr.unshift(rotation);        
    }
    console.log(arr.join(' '));
}
rotate(['1','2','3','4'],2);
rotate(['Banana', 'Orange', 'Coconut', 'Apple'], 15);
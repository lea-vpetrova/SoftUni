function solve(arr) {
    let maxLength = 0;
    let currentLength = 1;
    let longestSequenceStartIndex = 0;
    let longestEqualSequence = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            currentLength++; 
            if (currentLength > maxLength) {
            maxLength = currentLength;
            longestSequenceStartIndex = i-maxLength+1;
            }
        }
        else{
            currentLength = 1;
        }
    }
    if (maxLength > 1) {
        for (let i = longestSequenceStartIndex; i < longestSequenceStartIndex + maxLength; i++) {
            longestEqualSequence.push(arr[i]);
        }
        console.log(longestEqualSequence.join(' '));
    } 
}
solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
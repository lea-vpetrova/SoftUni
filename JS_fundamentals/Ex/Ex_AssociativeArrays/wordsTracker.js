function ocurrence(input) {
    let findOccurence = input.shift().split(' ');
    let wordCounts = {};
    for (let line of input) {
        let words = line.split(', ');
        for (let word of words) {
            if (wordCounts.hasOwnProperty(findOccurence)) {
                wordCounts[findOccurence]++;
            }
            else {
                wordCounts[findOccurence] = 1;
            }
        }
    }

}
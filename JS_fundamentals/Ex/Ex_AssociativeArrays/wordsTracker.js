function ocurrence(input) {
    let searchedWords = input.shift().split(' ');
    let wordCounts = {};
    for (let word of searchedWords) {
        wordCounts[word] = 0;
    }
    for (let word of input) {
        if (word in wordCounts) {
            wordCounts[word]++;
        }
    }

    let entries = Object.entries(wordCounts).sort((a,b) => b[1] -a[1]);
    for(let [word, rep] of entries)
    {
        console.log(`${word} - ${rep}`);
    }
}
ocurrence([

    'is the',

    'first', 'sentence', 'Here', 'is',

    'another', 'the', 'And', 'finally', 'the',

    'the', 'sentence']);
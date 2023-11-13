function wordOccurrence(input) {
    let wordCounts = {};
    for (let line of input) {
        let words = line.split(', ');
        for(let word of words){
            if (wordCounts.hasOwnProperty(word)) {
                wordCounts[word]++;
            }
            else{
                wordCounts[word] = 1;
            }
        }
    }
    let sortedWords = Object.keys(wordCounts).sort((a,b) => wordCounts[b]-wordCounts[a]);

    for (let word of sortedWords) {
        console.log(`${word} -> ${wordCounts[word]} times`);
    }
}
wordOccurrence(["Here", "is", "the", "first", "sentence",

    "Here", "is", "another", "sentence", "And",

    "finally", "the", "third", "sentence"]);
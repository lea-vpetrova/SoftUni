function wordsToUppercase(str) {
    let pattern = /[A-Za-z]+/gm;
    let matches = str.match(pattern);
    let result = [];
    for (let word of matches) {
        result.push(word.toUpperCase());
    }
    console.log(result.join(', '));
}
wordsToUppercase('Hi, how are you?');
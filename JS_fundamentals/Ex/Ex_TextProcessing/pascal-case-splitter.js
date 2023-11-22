function splitter(str) {
    let words = [];
    let currentWord = "";

    for (let i = 0; i < str.length; i++) {
        let ch = str.charAt(i);
        if (ch === ch.toUpperCase() && i > 0) {
            words.push(currentWord);
            currentWord = ch;
        } else {
            currentWord += ch;
        }
    }
    words.push(currentWord);
    console.log(words.join(', '));
}
splitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
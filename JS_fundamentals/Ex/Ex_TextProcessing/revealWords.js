function reavealWords(wordsStr, text) {
    let words = wordsStr.split(', ');

    for(let word of words){
        let repCount = word.length;
        let starTemplate = '*'.repeat(repCount);
        text = text.replace(starTemplate,word);
    }

    console.log(text);
}
reavealWords('great, learning','softuni is ***** place for ******** new programming languages');
function modernTimesOfHashtag(text){
    let words = text.split(' ');
    let hastWords = words.filter(word => word.startsWith('#') && word.length > 1);
    
    for (let word of hastWords) {
        word = word.slice(1);
        let isValid = true;

        for (let char of word) {
            if (!/[A-Za-z]/.test(char)) {
                isValid = false;
                break;
            }
        }

        if (isValid) {
            console.log(word);
        }
    } 
}
modernTimesOfHashtag('Nowadays everyone uses # to tag a #special word in #socialMedia');
modernTimesOfHashtag('The symbol # is known #variously in English - speaking #regions as the #number sign');
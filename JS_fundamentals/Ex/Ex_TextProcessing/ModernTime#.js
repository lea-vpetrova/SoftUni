function modernTimesOfHashtag(str){
    let hashtag = '#';
    let text = str.split(' ');
    for (let word of text) {
        if (word.includes(hashtag)) {
            let phrase = word.slice(1);
            if (phrase.length > 0) {
                console.log(phrase);
            }
            
        }
    } 
}
modernTimesOfHashtag('Nowadays everyone uses # to tag a #special word in #socialMedia');
modernTimesOfHashtag('The symbol # is known #variously in English - speaking #regions as the #number sign');
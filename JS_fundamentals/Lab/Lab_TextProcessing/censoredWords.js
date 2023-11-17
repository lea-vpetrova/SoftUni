function censor(text, word) {
    while(text.includes(word))
    {let newText = text.replace(word, ('*'.repeat(word.length)));}
    console.log(newText);
}
censor('A small sentence with some words','small');
censor('Find the hidden word', 'hidden');
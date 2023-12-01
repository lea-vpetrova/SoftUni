function matchPhoneNumber(input) {
    let validPhoneNumb = [];
    let pattern =/\+359([ -])2(\1)\d{3}(\1)\d{4}\b/g;
    while ((validNumb = pattern.exec(input)) !== null) {
        validPhoneNumb.push(validNumb[0]);
    }
    console.log(validPhoneNumb.join(', '));
}
matchPhoneNumber(['+359 2 222 2222, +359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, + 359 - 2 - 222 - 222, +359 - 2 - 222 - 22222 + 359 - 2 - 222 - 2222']);
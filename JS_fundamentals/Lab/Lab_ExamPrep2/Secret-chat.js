function secretChat(input) {
    let concealedMessage = input.shift();
    
    while (input[0] != 'Reveal'){
        let line = input.shift();
        let tokens = line.split(':|:');
        let command = tokens[0];

        switch (command) {
            case 'InsertSpace':
                let idx = Number(tokens[1]);
                let firstHalf = concealedMessage.slice(0, idx);
                let secondHalf = concealedMessage.slice(idx);
                concealedMessage = firstHalf + ' ' + secondHalf;
                break;
            case 'Reverse':
                let substring = tokens[1];
                let firstIndex = concealedMessage.indexOf(substring);
                if(firstIndex == -1){console.log('error'); continue;}
                let left = concealedMessage.slice(0,firstIndex);
                let right = concealedMessage.slice(firstIndex+substring.length);
                concealedMessage = left + right + substring.split('').reverse().join('');
                break;
            case 'ChangeAll':
                let match = tokens[1];
                let replacement = tokens[2];
                let parts = concealedMessage.split(match);
                concealedMessage = parts.join(replacement);
                break;
        }
        console.log(concealedMessage);
    }
    console.log(`You have a new text message: ${concealedMessage}`);
}
secretChat([

    'Hiware?uiy',

    'ChangeAll:|:i:|:o',

    'Reverse:|:?uoy',

    'Reverse:|:jd',

    'InsertSpace:|:3',

    'InsertSpace:|:7',

    'Reveal'

]);
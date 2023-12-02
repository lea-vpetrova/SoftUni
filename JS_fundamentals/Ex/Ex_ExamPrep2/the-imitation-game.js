function imitationGame(input) {
    let encryptedMessage = input.shift();

    while(input[0] != 'Decode'){
        let line = input.shift();
        let tokens = line.split('|');
        let command = tokens[0];

        switch (command) {
            case 'ChangeAll':
                let search = tokens[1];
                let replacement = tokens[2];
                while(encryptedMessage.includes(search)){
                    encryptedMessage = encryptedMessage.replace(search,replacement);
                }
                break;
            case 'Move':
                let nums = Number(tokens[1]);
                let firstLetters = encryptedMessage.slice(0,nums);
                encryptedMessage = encryptedMessage.replace(firstLetters,'')
                encryptedMessage += firstLetters;
                break;
            case 'Insert':
                let idx = Number(tokens[1]);
                let val = tokens[2];
                encryptedMessage = encryptedMessage.slice(0,idx) + val + encryptedMessage.slice(idx);
                break;
        }
    }
    console.log(`The decrypted message is: ${encryptedMessage}`);
}
imitationGame([

    'zzHe',

    'ChangeAll|z|l',

    'Insert|2|o',

    'Move|3',

    'Decode'

]);
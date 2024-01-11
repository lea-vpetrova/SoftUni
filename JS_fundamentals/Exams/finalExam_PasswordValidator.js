function passValidator(input){
    let pass = input.shift();
    
    while(input[0] != 'Complete'){
        let line = input.shift();
        let tokens = line.split(' ');
        let command = tokens.shift();

        switch (command) {
            case 'Make':
                let secCommand = tokens.shift();
                let idx = Number(tokens.shift());
                if (secCommand === "Lower") {
                    let letter = pass.charCodeAt(idx);
                    letter = String.fromCharCode(letter);
                    let lower = letter.toLowerCase();
                    pass = pass.replace(letter, lower);
                    console.log(pass);
                }
                if (secCommand === "Upper") {
                    let letter = pass.charCodeAt(idx);
                    letter = String.fromCharCode(letter);
                    let lower = letter.toUpperCase();
                    pass = pass.replace(letter, lower);
                    console.log(pass);
                }
            case 'Replace':
                let char = pass.charCodeAt(tokens.shift());
                let value = tokens.shift();
                let sum = char + Number(value)
                let newLetter = String.fromCharCode(sum);
                pass = pass.replaceAll(char, newLetter);
                console.log(pass);
                break;
            case 'Insert':
                let index = Number(tokens.shift());
                let val = tokens.shift();
                if (index < 0) {
                    continue;
                }
                pass = pass.slice(0, idx) + val + pass.slice(idx);
                console.log(pass);
                break;
            case 'Validation':
                if (pass.length < 8) {
                    console.log("Password must be at least 8 characters long!");
                }
                if (/^[A-Za-z0-9_]*$/.test(pass) == false) {
                    console.log("Password must consist only of letters, digits and _!");
                }
                if (/[A-Z]/.test(pass) === false) {
                    console.log("Password must consist at least one uppercase letter!");
                }
                if (/[a-z]/.test(pass) === false) {
                    console.log("Password must consist at least one lowercase letter!");
                }
                if (/[0-9]/.test(pass) === false) {
                    console.log("Password must consist at least one digit!");
                }
                break;
            default:
                continue;
        }
    }
    
} passValidator((['invalidpassword*',

    'Add 2 p',

    'Replace i -50',

    'Replace * 10',

    'Make Upper 2',

    'Validation',

    'Complete']));
function guessPass(input) {
    let guess = input[0];
    let pass = "s3cr3t!P@ssw0rd";
    if(guess == pass)
    {console.log("Welcome");}
    else {console.log("Wrong password!");}
}
guessPass(["s3cr3t!P@ssw0rd"]);
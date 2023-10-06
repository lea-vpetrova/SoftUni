function login(input) {
    let username = input[0];
    let password = '';
    for (let index = username.length-1; index >= 0; index--) {
        password += username[index]; 
    }
    let guess = input[1];
    let index = 2;
    let wrongAtt =0;
    while (guess != password)
    {
        wrongAtt++;
        if (wrongAtt == 4) {
            console.log(`User ${username} blocked!`);
            return;
        }
        console.log("Incorrect password. Try again.");
        guess = input[index];
        index++;
    }
    console.log(`User ${username} logged in.`);
}
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);
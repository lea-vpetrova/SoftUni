function expGaining(input) {
    let expTank = Number(input.shift());
    let battles = Number(input.shift());
    let exp = 0;
    for (let i=1; i<= input.length; i++) {
        let gains = Number(input[i-1]);
        exp += gains;
        if (i%3 == 0) {
            exp += (gains*=0.15);
        }
        if (i%5 == 0 ) {
            exp -= (gains*=0.1);
        }
        if (i%15 == 0) {
            exp += (gains *= 0.05);
        }
        if (exp >= expTank) {
            battles = i;
            break;
        }
        
    }
    
    if (exp >= expTank) {
        console.log(`Player successfully collected his needed experience for ${battles} battles.`);
                    
    }else{
        console.log(`Player was not able to collect the needed experience, ${(expTank-exp).toFixed(2)} more needed. `);
    }
   
}
expGaining([400,

    5,

    50,

    100,

    200,

    100,

    20]);
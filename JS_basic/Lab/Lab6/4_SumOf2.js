function sum(input) {
    let firstN = Number(input[0]);
    let lastN = Number(input[1]);
    let magicN = Number(input[2]);
    let comb =0;
    let isFound = false;
    for (let i = firstN; i <= lastN; i++) {
        for (let j = firstN; j <= lastN; j++) {
            comb++;
            if (i + j === magicN) {
                console.log(`Combination N:${comb} (${i} + ${j} = ${magicN})`);
                isFound = true;
                break;
            }
        }
        if (isFound) {
            break;
        }
        
    }
    if (isFound === false) {
        console.log(`${comb} combinations - neither equals ${magicN}`);
    }
}
sum(["23","24","20"]);
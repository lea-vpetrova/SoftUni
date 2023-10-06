function multiply() {
    for (let firstN = 1; firstN <= 10; firstN++) {
        for (let secondN = 1; secondN <= 10 ; secondN++) {
            let multy = firstN*secondN;
            console.log(`${firstN} * ${secondN} = ${multy}`);
        }
    }
}
multiply();
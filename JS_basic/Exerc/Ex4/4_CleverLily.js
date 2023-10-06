function SmartLilly(input) {
    let age = Number(input[0]);
    let washPrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let toyCount = 0, cash = 0;
    for (let i = 1; i <= age; i++) {
        if (i % 2 != 0) toyCount++;
        else cash += 10 * (i / 2) - 1;
    }
    cash += toyCount * toyPrice;
    if (cash > washPrice) console.log(`Yes! ${ (cash- washPrice).toFixed(2)}`);
    else console.log(`No! ${ (washPrice- cash).toFixed(2)}`);
}


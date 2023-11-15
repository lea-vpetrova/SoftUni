function mine(input) {
    let resorces = {};
    for (let i = 0; i < input.length; i+=2) {
        let resorce = input[i];
        let qty = Number(input[i+1]);
        if (resorce in resorces) {
            resorces[resorce] += qty;
        }
        else {
            resorces[resorce] = qty;
        }
    }

    let entries = Object.entries(resorces);
    for (let [resorce,qty] of entries) {
        console.log(`${resorce} -> ${qty}`);
    }
}
mine([

    'Gold',

    '155',

    'Silver',

    '10',

    'Copper',

    '17'

]);
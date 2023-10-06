function solve(range) {

    for (let i = 1; i <= range; i++) {
        i = i.toString();
        let sum = 0;
        for (let j = 0; j < i.length; j++) {
            sum += Number(i[j]);
        }
        if (sum.toString().includes(5) || sum.toString().includes(7) || sum.toString().includes(11)) {
            console.log(`${i} -> True`);
        }
        else {
            console.log(`${i} -> False`);
        }
        sum = 0;
    }
}
solve(15);
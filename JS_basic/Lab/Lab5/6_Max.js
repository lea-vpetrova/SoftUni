function max(input) {
    let el = input[0];
    let index = 1;
    let max = Number.MIN_SAFE_INTEGER;
    while (el !== "Stop") {
        let num = Number(el);
        if (num > max) {
            max = num;
        }
        el = input[index];
        index++;
    }
    console.log(max);
}
max(["-10","20","-30","Stop"]);
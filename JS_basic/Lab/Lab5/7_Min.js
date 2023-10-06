function min(input) {
    let el = input[0];
    let index = 1;
    let min = Number.MAX_SAFE_INTEGER;
    while (el !== "Stop") {
        let num = Number(el);
        if (num < min) {
            min = num;
        }
        el = input[index];
        index++;
    }
    console.log(min);
}
min(["-10","20","-30","Stop"]);
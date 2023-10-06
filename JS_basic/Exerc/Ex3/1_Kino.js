function Kino(input) {
    let type = input[0];
    let row = Number(input[1]);
    let col = Number(input[2]);
    let income =0;
    switch (type) {
        case "Premiere":
            income =  row * col * 12;
            break;
        case "Normal":
            income = row * col * 7.50;
            break;
        case "Discount":
            income = row * col * 5;
            break;
    }
    console.log(`${income.toFixed(2)} leva`);
}
Kino(["Premiere",
    "10",
    "12"]);
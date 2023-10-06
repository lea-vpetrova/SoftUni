function colorEgg(input) {
    let size = input[0];
    let color = input[1];
    let count = Number(input[2]);
    let money =0 ;
    switch (size) {
        case "Large":
            switch (color) {
                case "Red":
                    money+=16;
                    break;
                case "Green":
                    money+=12;
                    break;
                case "Yellow":
                    money+=9;
                    break;
            }
            break;
        case "Medium":
            switch (color) {
                case "Red":
                    money+=13;
                    break;
                case "Green":
                    money+=9;
                    break;
                case "Yellow":
                    money+=7;
                    break;
            }
            break;
        case "Small":
            switch (color) {
                case "Red":
                    money +=9;
                    break;
                case "Green":
                    money+=8;
                    break;
                case "Yellow":
                    money+=5;
                    break;
            }
            break;
    }
    let price = count*money;
    let expenses = price*0.35;
    let income = (price - expenses).toFixed(2);
    console.log(`${income} leva.`);
}
colorEgg(["Medium","Green","5"]);
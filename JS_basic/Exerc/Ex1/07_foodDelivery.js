function delivery(input) {
    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let veggieMenu = Number(input[2]);
    let price = chickenMenu*10.35 +fishMenu*12.40 + veggieMenu*8.15;
    let desert = price * 0.20;
    let totalPrice = price + desert + 2.50;
    console.log(totalPrice);
}
delivery(["2","4","3"]);
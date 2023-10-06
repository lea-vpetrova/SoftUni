function supplies(input) {
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let cleaningLiquid = Number(input[2]);
    let discount = Number(input[3])/100;
    let price = pens*5.80 +markers*7.20 +cleaningLiquid*1.20;
    let totalPrice = price - (price*discount);
    console.log(totalPrice);
}
supplies(["2","3","4","25"]);
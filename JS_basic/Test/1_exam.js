function moon(input) {
    let speed = Number(input[0]);
    let fuelFor100 = Number(input[1]);
    let distance = 384400*2;
    let time = Math.ceil(distance/speed)+3;
    let fuel = (fuelFor100 * distance)/100;

    console.log(time);
    console.log(fuel);
}
moon(["15000","4"]);
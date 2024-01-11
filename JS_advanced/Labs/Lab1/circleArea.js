function circleArea(radius) {
    typeof (radius) !== 'number' ?
     console.log(`We can not calculate the circle area, because we receive a ${typeof(radius)}.`)
    : console.log((Math.PI*Math.pow(radius,2)).toFixed(2));
}
circleArea('name');
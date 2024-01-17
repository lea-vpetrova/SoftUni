function validityChecker(x1,y1,x2,y2) {
    let distance = (x1,y1,x2,y2) => Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

    Number.isInteger(distance(x1, y1, 0, 0)) ? console.log(`{${x1},${y1}} to {0, 0} is valid`) : console.log(`{${x1},${y1}} to {0, 0} is invalid`);
    Number.isInteger(distance(x2, y2, 0, 0)) ? console.log(`{${x2},${y2}} to {0, 0} is valid`) : console.log(`{${x2},${y2}} to {0, 0} is invalid`);
    Number.isInteger(distance(x1, y1, x2, y2)) ? console.log(`{${x1},${y1}} to {${x2},${y2}} is valid`) : console.log(`{${x1},${y1}} to {${x2},${y2}} is invalid`);

}
validityChecker(2, 1, 1, 1);
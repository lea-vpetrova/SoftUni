function simpleCalc(num1,num2,operator) {
    let multiply = (a,b) => console.log(a*b);
    let divide = (a,b) => console.log(a/b);
    let add = (a,b) => console.log(a+b);
    let subtract = (a,b) => console.log(a-b);
    switch (operator) {
        case 'multiply':
            multiply(num1,num2);
            break;
        case 'divide':
            divide(num1, num2);
            break;
        case 'add':
            add(num1, num2);
            break;
        case 'subtract':
            subtract(num1, num2);
            break;
    }
}
simpleCalc(5,5,'multiply');
simpleCalc(40, 8, 'divide');
simpleCalc(12, 19, 'add');
simpleCalc(50, 13, 'subtract');

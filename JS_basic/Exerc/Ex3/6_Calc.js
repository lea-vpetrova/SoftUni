function calc(input) {
    let N1 = Number(input[0]);
    let N2 = Number(input[1]);
    let operation = input[2];
    let result = 0;
    let isEvenOdd;
    switch (operation) {
        case "+":
            result = N1 + N2;
            if (result % 2 === 0) {
               isEvenOdd = "even" ;
            }
            else {isEvenOdd = "odd";}
            console.log(`${N1} ${operation} ${N2} = ${result} - ${isEvenOdd}`);
            break;
        case "-":
            result = N1 - N2;
            if (result % 2 === 0) {
                isEvenOdd = "even";
            }
            else { isEvenOdd = "odd"; }
            console.log(`${N1} ${operation} ${N2} = ${result} - ${isEvenOdd}`);
            break;
        case "*":
            result = N1 * N2;
            if (result % 2 === 0) {
                isEvenOdd = "even";
            }
            else { isEvenOdd = "odd"; }
            console.log(`${N1} ${operation} ${N2} = ${result} - ${isEvenOdd}`);
            break;
        case "/":
            if (N2 === 0) {
                console.log(`Cannot divide ${N1} by zero`);
            }
            else { result = N1 / N2; result.toFixed(2);console.log(`${N1} / ${N2} = ${result} `); }
            
            break;
        case "%":
            if (N2 === 0) {
                console.log(`Cannot divide ${N1} by zero`);
            }
            else { result = N1 % N2;console.log(`${N1} / ${N2} = ${result}`); }
            
            break;
    }
}
calc(["10",
    "0",
    "%"]);
function solve(n1,n2,op) {
    let operation = {
        '+': (x,y) => x + y,
        '-': (x,y)=> x-y,
        '*': (x, y) => x * y,
        '/': (x, y) => x / y,
        '%': (x, y) => x % y,
        '**': (x, y) => x ** y,
    }

    let result = operation[op](n1,n2);
    console.log(result);
}
solve(3, 5.5, '*');
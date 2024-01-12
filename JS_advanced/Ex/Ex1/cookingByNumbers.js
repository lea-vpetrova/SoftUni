function cooking(numAsString,...op) {
    let num = Number(numAsString);
    let operations = {
        'chop': (n)=> n =n/2,
        'dice': (n) => n =Math.sqrt(n),
        'spice': (n) => n=n +1,
        'bake': (n) => n=n *3,
        'fillet': (n) => n -= n*0.2,
    }
    op.forEach(el=>{
        num = operations[el](num);
        console.log(num);
    });
}
cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop');
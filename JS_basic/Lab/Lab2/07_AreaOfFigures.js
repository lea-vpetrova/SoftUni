function area(input) {
    let type = input[0];
    let sum = 0;
    if (type == "square") {
        let a = Number(input[1]);
        sum = a*a;
    }
    else if(type == "rectangle") {
        let a = Number(input[1]);
        let b = Number(input[2]);
        sum = a*b;
    }
    else if (type == "circle")
    {
        let r = Number(input[1]);
        sum = Math.PI*r*r;
    }
    else if (type == "triangle")
    {
        let a = Number(input[1]);
        let h = Number(input[2]);
        sum = a*h / 2;
    }
    console.log(sum.toFixed(3));
}
area(["rectangle","7", "2.5"]);
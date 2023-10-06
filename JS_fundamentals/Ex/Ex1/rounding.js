function rounding(num, precision) {
    if(precision > 15)
    {
        precision=15;
    }
    let newNum  = num.toFixed(precision);
    console.log(parseFloat(newNum));
}
rounding(3.1415926535,2);
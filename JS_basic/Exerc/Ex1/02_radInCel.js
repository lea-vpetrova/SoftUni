function convertor(input) {
    let rad=Number(input[0]);
    let cel  = rad * 180/Math.PI;
    console.log(cel);
}
convertor(["3.1416"]);
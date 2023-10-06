function basketballEquip(input) {
    let annualTax = Number(input[0]);
    let sneakers =  annualTax - (annualTax*0.4);
    let sportswear = sneakers - (sneakers*0.2);
    let ball = sportswear*0.25;
    let accessories=ball*0.2;
    let all = annualTax + sneakers + sportswear + ball +accessories;
    console.log(all);
}
basketballEquip(["365"]);
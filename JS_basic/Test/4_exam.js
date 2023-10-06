function catFood(input) {
    let cats = Number(input[0]);
    let food = 0;
    let foodtotal = 0;
    let gr1=0, gr2=0, gr3=0;
    let price =0;

    for (let i = 1; i <= cats; i++) {
        food = Number(input[i]);
        if (food >= 100 && food <200) 
        { gr1++;}
        else if(food >=200 && food<300)
        {gr2++;}
        else {gr3++;}
        foodtotal += food;
    }
    price = ((foodtotal/1000)*12.45).toFixed(2);

    console.log(`Group 1: ${gr1} cats.`);
    console.log(`Group 2: ${gr2} cats.`);
    console.log(`Group 3: ${gr3} cats.`);
    console.log(`Price for food per day: ${price} lv.`);
}
catFood(["6","102","236","123","399","342","222"]);
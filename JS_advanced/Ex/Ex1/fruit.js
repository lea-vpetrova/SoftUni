function fruit(name, grams, price) {
    let kg = (grams/1000).toFixed(2);
    let money = (price*kg).toFixed(2);
    console.log(`I need $${money} to buy ${kg} kilograms ${name}.`);
}
fruit('orange', 2500, 1.80);
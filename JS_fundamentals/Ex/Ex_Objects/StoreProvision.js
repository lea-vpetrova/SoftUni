function storeProvision(currentStock, forOrder) {
    let stock ={};
    for (let index = 0; index < currentStock.length; index += 2) {
        stock[currentStock[index]] = Number(currentStock[index + 1]);
    }
    
    for (let i = 0; i < forOrder.length; i+=2) {
        if(!stock.hasOwnProperty(forOrder[i]))
        {
            stock[forOrder[i]] = 0;
        }
        stock[forOrder[i]]+=Number(forOrder[i+1]);
    }

    for (let product in stock) {
        console.log(`${product} -> ${stock[product]}`);
    }
    
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7',
        'Tomatoes', '70', 'Bananas', '30'
    ]);
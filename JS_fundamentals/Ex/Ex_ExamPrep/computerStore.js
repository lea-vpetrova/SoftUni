function computerStore(input) {
    let priceNoTax = 0;
    let command = input.shift();

    while (command != 'special' && command != 'regular') {
        let price = Number(command);
        if (price <= 0) {
            console.log('Invalid price!');
            command = input.shift();
            continue;
        }

        priceNoTax += price;
        
        
        command = input.shift();
    }

    if (priceNoTax == 0) {
        console.log('Invalid order!');
    }
    else{
        let tax = 0.2 * priceNoTax;
        let priceWithTax = priceNoTax + tax;

        if (command == 'special') {
            priceWithTax *= 0.9;
        }

        console.log(`Congratulations you've just bought a new computer!\nPrice without taxes: ${priceNoTax.toFixed(2)}$\nTaxes: ${tax.toFixed(2)}$\n-----------\nTotal price: ${priceWithTax.toFixed(2)}$`);
    }
}
computerStore(['1050','200','450','2','18.50','16.86','special']);
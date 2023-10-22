function coffeeLover(input) {
    let coffeeTypes = input.shift().split(' ');
    let commandsCount = Number(input.shift());
    for (let i = 0; i <commandsCount; i++) {
        let tokens = input[i].split(' ');
        let command = tokens.shift();
        if (command == 'Include') {
            let coffee = tokens[0];
            coffeeTypes.push(coffee);
        }
        else if (command == 'Remove') {
            let begin = tokens[0];
            let number = tokens[1];
            if (number >= coffeeTypes.length) {
                continue;
            }
            if (begin == 'first') {
                coffeeTypes.splice(0,number);
            }
            else if (begin == 'last') {
                coffeeTypes.splice(coffeeTypes.length - number, number);
            }
        }
        else if (command == 'Prefer') {
            let index1 =Number(tokens[0]);
            let index2 = Number(tokens[1]);
            
            if (coffeeTypes.includes(coffeeTypes[index1]) && coffeeTypes.includes(coffeeTypes[index2])) {
                let temp = coffeeTypes[index1];
                coffeeTypes[index1] = coffeeTypes[index2];
                coffeeTypes[index2] = temp;
            }
        }
        else if (command == 'Reverse') {
            coffeeTypes.reverse();
        }
    }
    
    console.log(`Coffees:\n${coffeeTypes.join(' ')}`);
}
coffeeLover(["Robusta StrongCoffee BulkCoffee TurkishCoffee Arabica", "3", "Include OrdinaryCoffee", "Remove first 1", "Prefer 4 1"]);
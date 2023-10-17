function train(input) {
    let wagonsPassengers = input.shift().split(' ').map(Number);
    let wagonMaxCapacity = Number(input.shift());
    for (let i = 0; i < input.length; i++) {
        let [commands, num] = input[i].split(' ');
        num = Number(num);
        if (commands === 'Add') {
            wagonsPassengers.push(num);
        }
        else{
            let passangers = Number(commands);
            for (let j = 0; j < wagonsPassengers.length; j++) {
                if(wagonMaxCapacity-wagonsPassengers[j] >= passangers)
                {
                    wagonsPassengers[j] += passangers;
                    break;
                }
            }
        }
        
    }
    console.log(wagonsPassengers.join(' '));
}
train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']); //72 54 21 12 4 75 23 10 0
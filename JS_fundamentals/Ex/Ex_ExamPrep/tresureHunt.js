function treasureHunt(input){
    let treasureChest = input.shift().split('|');
    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(' ');
        let command = tokens.shift();
        if (command == 'Yohoho!') {
            break;
        }
        else if(command == 'Loot'){
            for (let el of tokens) {
                if (!treasureChest.includes(el)) {
                    treasureChest.unshift(el);
                }
            }
        }
        else if (command == 'Drop') {
            let index = Number(tokens[0]);
            if (index < 0 || index >= treasureChest.length) {
                continue;
            }
            let removedLoot = treasureChest.splice(index,1);
            treasureChest.push(removedLoot);
        }
        else if (command == 'Steal') {
            let count = Number(tokens[0]);
            let removedItems = treasureChest.splice(treasureChest.length - count, count);
            console.log(removedItems.join(', '));
        }
    }
    
    if (treasureChest.length<=0) {
        console.log('Failed treasure hunt.');
        return;
    }
    else{
        let sum = 0;
        for (let items of treasureChest) {
            sum += items.length;
            
        }
        let averageGain = (sum / treasureChest.length).toFixed(2);
        console.log(`Average treasure gain: ${averageGain} pirate credits.`);
    }
}
treasureHunt(["Diamonds|Silver|Shotgun|Gold", "Loot Silver Medals Coal", "Drop -1", "Drop 1", "Steal 6", "Yohoho!"])
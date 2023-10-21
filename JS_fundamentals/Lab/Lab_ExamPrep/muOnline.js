function muOnline(input) {
    let rooms = input.split('|');
    let health = 100;
    let bitcoins = 0;
    let bestRoom = 1;

    for (let room of rooms) {
        let tokens = room.split(' ');

        let command = tokens[0];
        let num = Number(tokens[1]);
        if (command == "potion") {
            let newHP = health + num <= 100 ? num : 100 - health;
            health += newHP;
            console.log(`You healed for ${newHP} hp.`);
            console.log(`Current health: ${health} hp.`);
        }
        else if (command == 'chest') {
            bitcoins += num;
            console.log(`You found ${num} bitcoins.`);
        }
        else {
            health -= num;
            if (health > 0) {
                console.log(`You slayed ${command}.`);
            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${bestRoom}`);
                break;
            }
        }
        bestRoom++;
    }
    if (health > 0) {
        console.log("You've made it!");
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }
}

muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
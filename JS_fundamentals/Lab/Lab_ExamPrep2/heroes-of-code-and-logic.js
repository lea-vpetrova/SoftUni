function heroesOfCodeAndLogicVII(input) {
    //parse input
    //store hero data
    let herosNum = Number(input.shift());
    let party = {};

    for (let i = 0; i < herosNum; i++) {
        let heroData = input.shift();
        let [name, hp, mp] = heroData.split(' ');

        let hero = {
            hp: Number(hp),
            mp: Number(mp)
        };

        party[name] = hero;
    }
    //for each line until 'End'
    // - check command and execute

    while (input[0] != 'End') {
        let line = input.shift();
        let tokens = line.split(' - ');
        let command = tokens[0];
        let name = tokens[1];
        let hero = party[name];

        switch (command) {
            //# Heal
            // check how much health can be restored
            //add hp to hero stat
            //print success message
            case 'Heal':
                let hpToRestore = Number(tokens[2]);
                if (hero.hp + hpToRestore > 100) {
                    hpToRestore = 100 - hero.hp;
                }
                hero.hp += hpToRestore;
                console.log(`${ name } healed for ${ hpToRestore } HP!`);
                break; 

            //# Recharge
            //check how much mana can be restored
            //add mana to hero stat
            //print success message
            case 'Recharge':
                let mpToRestore = Number(tokens[2]);
                if (hero.mp + mpToRestore > 200) {
                    mpToRestore = 200 - hero.mp;
                }
                hero.mp += mpToRestore;
                console.log(`${name} recharged for ${mpToRestore} MP!`);
                break;

            //# CastSpell
            //check if hero has enough mana
            // - if yes, cast spell, subtract mana and print success message
            // - else, print error message
            case 'CastSpell':
                let mpNeeded = tokens[2];
                let spell = tokens[3];
                if(mpNeeded < hero.mp){
                    hero.mp -= mpNeeded;
                    console.log(`${name} has successfully cast ${spell} and now has ${hero.mp} MP!`);
                }else{
                    console.log(`${name} does not have enough MP to cast ${spell}!`);
                }
                break;

            //# TakeDamage
            //subtract damage from hero health
            //check if hero is still alive
            // - if yes, print damage message
            // - else, print death message and remove hero from party
            case 'TakeDamage':
                let damage = tokens[2];
                let attacker = tokens[3];
                hero.hp -= damage;
                if(hero.hp > 0){
                    console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${hero.hp} HP left!`);
                }else{
                    console.log(`${name} has been killed by ${attacker}!`);
                    delete party[name];
                }
                break;
        }
    }

    //print result
    for(let name in party){
        let hero = party[name];

        console.log(name);
        console.log(`   HP: ${hero.hp}`);
        console.log(`   MP: ${hero.mp}`);
    }
}
heroesOfCodeAndLogicVII(['4', 'Adela 90 150', 'SirMullich 70 40', 'Ivor 1 111', 'Tyris 94 61', 'Heal - SirMullich - 50', 'Recharge - Adela - 100', 'CastSpell - Tyris - 1000 - Fireball', 'TakeDamage - Tyris - 99 - Fireball', 'TakeDamage - Ivor - 3 - Mosquito', 'End']);
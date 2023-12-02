function pirates(input) {
    let targets = {};
    while (input[0] != 'Sail') {
        let line = input.shift();
        let [city, population, gold] = line.split('||');
        population = Number(population);
        gold = Number(gold);
        if (city in targets) {
            targets[city].population += Number(population);
            targets[city].gold += Number(gold);
        }else{
            targets[city] = { population, gold};
        }
    }
    while (input[0] != 'End') {
        let line = input.shift();
        let tokens = line.split('=>');
        if (tokens[0] == 'Plunder') {
            let city = tokens[1];
            let people = Number(tokens[2]);
            let gold = Number(tokens[3]);
            targets[city].population -= people;
            targets[city].gold -= gold;
            console.log(`${city} plundered! ${gold} gold stolen, ${people} citizens killed.`);
            if ( targets[city].population <= 0 || targets[city].gold<= 0) {
                console.log(`${city} has been wiped off the map!`);
                delete targets[city];
            }
        }
        else if (tokens[0] == 'Prosper') {
            let city = tokens[1];
            let gold = Number(tokens[2]);
            if (gold < 0) {
                console.log('Gold added cannot be a negative number!');
                continue;
            }
            targets[city].gold += gold;
            console.log(`${gold} gold added to the city treasury. ${city} now has ${targets[city].gold} gold.`);
            
        }

        
    }

    let entries = Object.entries(targets);
    
    if (entries.length == 0) {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }
    else{
        console.log(`Ahoy, Captain! There are ${entries.length} wealthy settlements to go to:`);
        entries.forEach(([city, stats]) => console.log(`${city} -> Population: ${stats.population} citizens, Gold: ${stats.gold} kg`));
    }
}
pirates((["Tortuga||345000||1250",
         "Santo Domingo||240000||630",
         "Havana||410000||1100",
         "Sail",
         "Plunder=>Tortuga=>75000=>380",
         "Prosper=>Santo Domingo=>180",
         "End"]));
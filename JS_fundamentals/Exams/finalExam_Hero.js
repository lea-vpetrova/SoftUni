function hero(input) {
    let heroes = {};
    for (let line of input) {
        if (line === 'End') {
            break;
        }
        let tokens = line.split(' ');
        let command = tokens[0];
        let heroName = tokens[1];
        let spellName = tokens[2];
        switch (command) {
            case 'Enroll':
                enrollHero(heroName);
                break;
            case 'Learn':
                
                learnSpell(heroName, spellName);
                break;
            case 'Unlearn':
                unlearnSpell(heroName, spellName);
                break;
        }
    }

    printHeroes();

    function enrollHero(heroName) {
        if (!heroes.hasOwnProperty(heroName)) {
            heroes[heroName] = [];
        } else {
            console.log(`${heroName} is already enrolled.`);
        }
    }

    function learnSpell(heroName, spellName) {
        if (heroes.hasOwnProperty(heroName)) {
            if (!heroes[heroName].includes(spellName)) {
                heroes[heroName].push(spellName);
            } else {
                console.log(`${heroName} has already learnt ${spellName}.`);
            }
        } else {
            console.log(`${heroName} doesn't exist.`);
        }
    }

    function unlearnSpell(heroName, spellName) {
        if (heroes.hasOwnProperty(heroName)) {
            let spellIndex = heroes[heroName].indexOf(spellName);
            if (spellIndex !== -1) {
                heroes[heroName].splice(spellIndex, 1);
            } else {
                console.log(`${heroName} doesn't know ${spellName}.`);
            }
        } else {
            console.log(`${heroName} doesn't exist.`);
        }
    }

    function printHeroes() {
        console.log('Heroes:');
        Object.entries(heroes)
            .forEach(([hero, spells]) => {
                console.log(`== ${hero}: ${spells.join(', ')}`);
            });
    }
}
hero(["Enroll Stefan",

    "Enroll Peter",

    "Enroll John",

    "Learn Stefan Spell",

    "Learn Peter Dispel",

    "End"]);
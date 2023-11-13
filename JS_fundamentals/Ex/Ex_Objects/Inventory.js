function inventory(input) {
    let heroRegister = {};
    let heros =[];
    for (const record of input) {
        let [name,level, items] = record.split('/');
        heroRegister ={ name : name, 
                        level: Number(level),
                        items: items };
        heros.push(heroRegister);
    }
    heros.sort(function(a,b){return a.level - b.level;});
        //console.log(`Hero: ${heroRegister.name}\nlevel => ${heroRegister.level}\nItems => ${heroRegister.items}`);
        return heros;
    
}
inventory([ 'Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara']);
//inventory([ 'Batman / 2 / Banana, Gun', 'Superman / 18 / Sword', 'Poppy / 28 / Sentinel, Antara']);
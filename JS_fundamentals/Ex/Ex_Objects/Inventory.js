function inventory(input) {
    for (const record of input) {
        let [name,level, items] = record.split('/');
        let heroRegister ={ name : name, 
                        level: Number(level),
                        items: items };
        console.log(`Hero: ${heroRegister.name}\nlevel => ${heroRegister.level}\nItems => ${heroRegister.items}`);
    }
}
inventory([ 'Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara']);
//inventory([ 'Batman / 2 / Banana, Gun', 'Superman / 18 / Sword', 'Poppy / 28 / Sentinel, Antara']);
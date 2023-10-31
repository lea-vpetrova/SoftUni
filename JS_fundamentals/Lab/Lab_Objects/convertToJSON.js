function convertor(name, lastName, hairColor) {
    let person = {
        name: name,
        lastName: lastName,
        hairColor: hairColor
    };
    console.log(JSON.stringify(person));
}
convertor('Lea','Petrova','Brown');
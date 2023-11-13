function AdsressBook(input) {
    let addressbook = {};
    for (let line of input) {
        let [name, address] = line.split(':');
        addressbook[name]=address;
    }
    let sorted = Object.entries(addressbook);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));
    for (let key of sorted) {
        console.log(`${key[0]} -> ${key[1]}`);
    }
}

AdsressBook(['Tim:Doe Crossing',

    'Bill:Nelson Place',

    'Peter:Carlyle Ave',

    'Bill:Ornery Rd']);
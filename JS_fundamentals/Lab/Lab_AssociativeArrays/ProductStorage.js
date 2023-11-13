function ProductStorage(input) {
    let storageList = {};
    for (let record of input) {
        let[product, quantity] = record.split(' ');
        quantity = Number(quantity);
        if (storageList.hasOwnProperty(product)) {
            storageList[product] += quantity;
        }
        else {
            storageList[product] = quantity;
        }
    }
    for (const key in storageList) {
        console.log(`${key} -> ${storageList[key]}`);
    }
}
ProductStorage(['apple 50',

    'apple 61',

    'coffee 115',

    'coffee 40']);
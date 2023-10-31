function convertor(jsonStr) {
    let person = JSON.parse(jsonStr);
    let entries = Object.entries(person);

    for (let [key, value] of entries) {
        console.log(`${key}: ${value}`);
    }
}
convertor('{"name": "George", "age": 40, "town": "Sofia"}');
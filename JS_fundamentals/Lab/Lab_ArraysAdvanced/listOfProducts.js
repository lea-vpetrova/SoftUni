function listOfProducts(input) {
    let sortedProducts = input.sort();
    for (let i = 0; i < sortedProducts.length; i++) {
        console.log(`${i + 1}.${sortedProducts[i]}`);
    }
}
listOfProducts(['Watermelon', 'Banana', 'Apples']);
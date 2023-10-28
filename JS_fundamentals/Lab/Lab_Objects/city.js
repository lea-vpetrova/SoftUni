function cityInput(city) {
    
    let keys = Object.keys(city);
    for (let key of keys) {
        console.log(key, '->', city[key]);
    }
    /*
    for(let [prop,value] of Object.entries(city)){
        console.log(prop, '->' , value);
    }
    */
}
cityInput({
    name: 'Sofia',
    area: 492,
    population: 1238438,
    country: 'Bulgaria',
    postCode: '1000'

});
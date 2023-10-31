function towns(arr) {
    let townDetail ={};
    for (let i = 0; i < arr.length; i++) {
        let [town,latitude,longitude] = arr[i].split(' |');
        townDetail = {
            town: town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        };
        console.log(townDetail);
    }
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);
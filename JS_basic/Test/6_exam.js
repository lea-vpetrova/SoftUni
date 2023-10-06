function goldMine(input) {
    let locations =Number(input[0]);
    let estimatedGold =0;
    let days =0;
    let goldForDay = 0;
    
    for (let index = 1; index < input.length; index +=days+2) {
        estimatedGold = Number(input[index]);
        days = Number(input[index + 1]);
        let dayCount = days
        for (let i = 3; i < days+dayCount; i++) {
            goldForDay += Number(input[i]);
        }
    }
    
    
    
}
goldMine(["2",
    "10",
    "3",
    "10",
    "10",
    "11",
    "20",
    "2",
    "20",
    "10"]);
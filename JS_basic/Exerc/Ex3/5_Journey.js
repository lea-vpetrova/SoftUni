function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let destination = '';
    let restType = '';
    let spendings =0;

    if (budget <= 100) {
        destination = "Bulgaria";
        if (season === "summer") {
            restType = "Camp";
            spendings = (budget*0.3);
        }
        else if (season === "winter")
        { 
            restType ="Hotel";
            spendings = (budget*0.7);
        }
    }
    else if(budget > 100 && budget <1000)
    {
        destination = "Balkans";
        if (season === "summer") {
            restType = "Camp";
            spendings = (budget * 0.4);
        }
        else if (season === "winter") {
            restType = "Hotel";
            spendings = (budget * 0.8);
        }
    }
    else 
    {
        destination = "Europa";
        restType = "Hotel";
        spendings = (budget * 0.9);
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${restType} - ${spendings.toFixed(2)}`);
}
journey(["678.53", "winter"]);
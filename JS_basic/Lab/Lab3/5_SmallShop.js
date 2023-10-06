function shop(input) {
    let product = input[0];
    let city = input[1];
    let count = Number(input[2]);
    let price = 0;
    if (city === "Sofia") {
        switch (product) 
        {
            case "coffee":
                price = count * 0.50;
                break;
            case "water":
                price = count *0.80;
                break;
            case "beer":
                price = count * 1.20;
                break;
            case "sweets":
                price = count * 1.45;
                break;
            case "peanuts":
                price = count * 1.60;
                break
            default:
                break;
        }
    }
    else if(city === "Plovdiv")
    {
        switch (product) {
            case "coffee":
                price = count * 0.40;
                break;
            case "water":
                price = count * 0.70;
                break;
            case "beer":
                price = count * 1.15;
                break;
            case "sweets":
                price = count * 1.30;
                break;
            case "peanuts":
                price = count * 1.50;
                break;
            default:
                break;
        }
    } else if (city === "Varna") {
        switch (product) {
            case "coffee":
                price = count * 0.45;
                break;
            case "water":
                price = count * 0.70;
                break;
            case "beer":
                price = count * 1.10;
                break;
            case "sweets":
                price = count * 1.35;
                break;
            case "peanuts":
                price = count * 1.55;
                break;
            default:
                break;
        }
    }
    
    console.log(price);
}
shop(["sweets",
    "Sofia",
    "2.23"])

;
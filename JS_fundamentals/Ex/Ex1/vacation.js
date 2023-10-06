function vacation (group,type, day) {
    let singularPrice = 0;
    switch (day) {
        case "Friday":
            if (type == "Students") {
                singularPrice = 8.45;
            }
            else if (type == "Business") {
                singularPrice = 10.90;
            }
            else if (type == "Regular") {
                singularPrice = 15;
            }
            break;
        case "Saturday":
            if (type == "Students") {
                singularPrice = 9.80;
            }
            else if (type == "Business") {
                singularPrice =15.60;
            }
            else if (type == "Regular") {
                singularPrice = 20;
            }
            break;
        case "Sunday":
            if (type == "Students") {
                singularPrice = 10.46;
            }
            else if (type == "Business") {
                singularPrice = 16;
            }
            else if (type == "Regular") {
                singularPrice = 22.50;
            }
            break;
            default: console.log("Error");
    }
    let totalPrice = group*singularPrice;
    if (type == "Students" && group>=30) {
        totalPrice -= totalPrice*0.15;
    }
    if (type == "Business" && group >= 100) {
        totalPrice -= 10*singularPrice;
    }
    if (type == "Regular" && group >= 30 && group<=20) {
        totalPrice -= totalPrice * 0.05;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(40,"Regular","Saturday");
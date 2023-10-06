function compRoom(input) {
    let month = input[0];
    let hourSpent = Number(input[1]);
    let peopleInGroup = Number(input[2]);
    let time = input[3];
    let pricePerPerson = 0;
    let totalPrice =0;

    switch (time) {
        case "day":
            switch (month) {
                case "march":
                case "april":
                case "may":
                    pricePerPerson = 10.50;
                    break;
                case "june":
                case "july":
                case "august":
                    pricePerPerson = 12.60;
                    break;
            }
            break;
        case "night":
            switch (month) {
                case "march":
                case "april":
                case "may":
                    pricePerPerson = 8.40;
                    break;
                case "june":
                case "july":
                case "august":
                    pricePerPerson = 10.20;
                    break;
            }
            break;
    }
    if (peopleInGroup>=4) {
        pricePerPerson -= (pricePerPerson*0.1);
    }
    if (hourSpent >= 5) {
        pricePerPerson -= (pricePerPerson*0.5);
    }
    totalPrice = pricePerPerson * peopleInGroup * hourSpent;

    console.log(`Price per person for one hour: ${pricePerPerson.toFixed(2)}`);
    console.log(`Total cost of the visit: ${totalPrice.toFixed(2)}`);
}
compRoom(["march","3","3","day"]);
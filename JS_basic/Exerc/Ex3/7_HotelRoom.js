function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);
    let studioPrice = 0;
    let apartamentPrice = 0;

    switch (month) {
        case "May":
        case "October": 
            studioPrice = 50 * nights;
            apartamentPrice = 65*nights;
            if (nights > 7 && nights <=14) {
                studioPrice -= (studioPrice*0.05);
            }
            else if(nights>14)
            {
                studioPrice -= (studioPrice * 0.3);
            }
            break;
        case "June":
        case "September":
            studioPrice = 75.20 * nights;
            apartamentPrice = 68.70 * nights;
            if (nights > 14) {
                studioPrice -= (studioPrice * 0.2);
            }
            break;
        case "July":
        case "August":
            studioPrice = 76 * nights;
            apartamentPrice = 77 * nights;
            break;
    }
    if (nights>14) {
        apartamentPrice -= (apartamentPrice*0.1);
    }
    console.log(`Apartment: ${apartamentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}
hotelRoom(["August",
    "20"]);
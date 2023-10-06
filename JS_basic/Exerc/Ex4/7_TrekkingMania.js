function trekkingMania(input) {
    let groupCount = Number(input[0]);
    let people = '';
    let all = 0;
    for (let i = 1; i <= groupCount; i++) {
        people = Number(input[i]);
        all += people;
        if (people <= 5) {
            let p = people / all * 100;
            console.log(p);
        }
        else if (people >= 6 && people <= 12) {
            let p = people / all * 100;
            console.log(p);
        }
        else if (people >= 6 && people <= 12) {
            let p = people / all * 100;
            console.log(p);
        }
        else if (people >= 13 && people <= 25) {
            let p = people / all * 100;
            console.log(p);
        }
        else if (people >= 26 && people <= 40) {
            let p = people / all * 100;
            console.log(p);
        }
        else {
            let p = people / all * 100;
            console.log(p);
        }
    }


}
trekkingMania(["5",
    "25",
    "41",
    "31",
    "250",
    "6"]);
/*•	Група от 6 до 12 човека – изкачват Монблан
•	Група от 13 до 25 човека – изкачват Килиманджаро
•	Група от 26 до 40 човека –  изкачват К2
•	Група от 41 или повече човека – изкачват Еверест
*/
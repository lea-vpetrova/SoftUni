function spaceship(input) {
    let wid = Number(input[0]);
    let len = Number(input[1]);
    let higShip = Number(input[2]);
    let higAstr = Number(input[3]);

    let rocketSize = wid*len*higShip;
    let roomSize = (higAstr+0.40)*2*2;
    let people = Math.floor(rocketSize/roomSize);

    if (people<3) {
        console.log("The spacecraft is too small.");
    }
    else if (people >= 3 && people <=10) {
        console.log(`The spacecraft holds ${people} astronauts.`);
    } 
    else{
        console.log("The spacecraft is too big.");
    }
}
spaceship(["3.5","4","5","1.70"]);
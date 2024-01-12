function roadRadar(speed, area) {
    let speedLimit = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20
    };
    let differnce=0;
    let status = '';
    let checkSpeed = speedLimit[area];
    if(speed <= checkSpeed){
        console.log(`Driving ${speed} km/h in a ${checkSpeed} zone`);
    }else{
        differnce = speed - checkSpeed;
        if (differnce <=20) {
            status = 'speeding';
        }
        else if(differnce>20 && differnce <=40)
        {
            status = 'excessive speeding';
        }
        else status = 'reckless driving';
        console.log(`The speed is ${speed-checkSpeed} km/h faster than the allowed speed of ${checkSpeed} - ${status}`);
    }
}
roadRadar(21, 'residential');
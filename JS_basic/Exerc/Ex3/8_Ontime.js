function onTime(input) {
    let examHour = Number(input[0]);
    let examMins= Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMins = Number(input[3]);
    let examTotal = examHour*60 + examMins;
    let arrivalTotal = arrivalHour * 60 + arrivalMins;

    if (arrivalTotal > examTotal) {
        console.log("Late");
    }
    else if (arrivalTotal === examTotal || examTotal-arrivalTotal<=30)
    {
        console.log("On time");
    }
    else 
    {
        console.log("Early");
    }

    if ( examTotal -arrivalTotal < 60) {
        console.log(`${examTotal- arrivalTotal} minutes before the start`);
    }
    else if (examTotal - arrivalTotal >= 60)
    {
        if (examTotal - arrivalTotal === 60) {
            console.log(`1:00 hours before the start`);
        }
        else 
        {
            if (examTotal-arrivalTotal >= 61 && examTotal - arrivalTotal <= 69) {
                
            }
        }
    }
    /*if (arrivalHour > examHour) 
    {
       console.log("Late");
    }
    else if (arrivalHour === examHour) 
    {
        if(arrivalMins > examMins)
        {
            console.log("Late");
        }
        else if (arrivalMins <= examMins && (examMins-arrivalMins)<=30 )
        {
            console.log("On time");
        }
        else if ((examMins - arrivalMins) > 30) {
            console.log("Early");
        }
    }
    else if(arrivalHour <= examHour)
    {
        if ((examMins - arrivalMins) >= 30)
        {
            console.log("Early");
        }
    }

    if (arrivalMins === examMins - 1 ) {
        console.log(`${examMins-arrivalMins} minutes before the start`);
    }*/
}
onTime(["9","40","9","39"]);
function IsWorking(input) {
    let hour = Number(input[0]);
    let day = input[1];
    if(hour >= 9 && hour <=18){
        if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday" || day === "Saturday" ) {
            console.log("open");          
        }
        else { console.log("closed"); }
    }
    else {console.log("closed");}
}
IsWorking(["11",
    "Sunday"])
;
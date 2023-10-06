function dayOfWeek(day) {
    const days = ["Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday", "Sunday"];
    if (day>=1 && day<=7) {
        for (let i = 0; i < days.length+1; i++) {
            if (day == i) {
                console.log(days[i-1]);
            }
        }
    }
    else{
        console.log("Invalid day!");
    }
}
dayOfWeek(3);
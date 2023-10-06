function lunchBreak(input) {
    let movieTitle = input[0];
    let episodeduration = Number(input[1]);
    let breakDuration = Number(input[2]);
    
    let lunch = breakDuration * (1/8);
    let rest = breakDuration * (1/4);

    let totalTakenTime = lunch + rest;
    let leftTime = breakDuration - totalTakenTime;

    if (leftTime >= episodeduration) 
    {   let timeAfterMovie = Math.ceil(leftTime - episodeduration);
        console.log(`You have enough time to watch ${movieTitle} and left with ${timeAfterMovie} minutes free time.`); }
    else
    {   let timeNeeded = Math.ceil(episodeduration - leftTime); 
        console.log(`You don''t have enough time to watch ${movieTitle}, you need ${timeNeeded} more minutes.`); }
}
lunchBreak(["Game of Thrones",
    "60",
    "96"]);

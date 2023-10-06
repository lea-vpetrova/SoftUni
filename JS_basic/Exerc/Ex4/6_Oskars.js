/*function oskars(input) {
    let actor = input[0];
    let academyPoints = Number(input[1]);
    let n = Number(input[2]);
    let nameJudge = '';
    let judgePoints =0;
    let points = 0;
    for (let i = 3; i <= n+3; i+=2) {
        nameJudge = input[i];
        judgePoints = Number(input[i+1]);
        academyPoints += ((nameJudge.length * judgePoints)/2);
    }
    if (academyPoints >= 1250.5) {
        console.log(`Congratulations, ${actor} got a nominee for leading role with ${(academyPoints).toFixed(1)}!`);
    }
    else { console.log(`Sorry, ${actor} you need ${(1250.5 - academyPoints).toFixed(1)} more!`);}
}*/
function oscars(input) {
    let actorName = input[0];
    let academyPoints = Number(input[1]);
    let numOfJudge = Number(input[2]);
    let judgeName = '';
    let judgePoints = 0;
    let totalPoints = academyPoints;
    for (let index = 3; index < input.length; index += 2) {
        judgeName = input[index];
        judgePoints = input[index + 1];
        totalPoints += (judgeName.length * judgePoints) / 2;
        if (totalPoints > 1250.5) {
            console.log(`Congratulations, ${ actorName } got a nominee for leading role with ${ totalPoints.toFixed(1) } !`); break;
        }
    }
    if (totalPoints < 1250.5) console.log(`Sorry, ${ actorName } you need ${(1250.5 - totalPoints).toFixed(1)} more!`);
}
oscars(["Zahari Baharov",
    "205",
    "4",
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"])


;

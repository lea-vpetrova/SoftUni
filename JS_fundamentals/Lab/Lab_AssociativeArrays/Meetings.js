function Meetings(input) {
    let meetings = {};
    for (let line of input) {
        let [weekday, name] = line.split(' ');
        if (meetings.hasOwnProperty(weekday)) {
            console.log(`Conflict on ${weekday}!`);
        }else{
            meetings[weekday] = name;
            console.log(`Scheduled for ${weekday}`);
        }
    }
    for (const key in meetings) {
        console.log(`${key} -> ${meetings[key]}`);
    }
}
Meetings(['Monday Peter',

    'Wednesday Bill',

    'Monday Tim',

    'Friday Tim']);
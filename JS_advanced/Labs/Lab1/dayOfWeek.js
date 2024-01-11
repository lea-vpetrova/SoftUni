function dayOfWeek(strDay) {
    let days = {
        'Monday': 1,
        'Tuesday': 2,
        'Wednesday': 3,
        'Thursday': 4,
        'Friday': 5,
        'Saturday': 6,
        'Sunday': 7,
    }

    let numOfDay = days[strDay];
    numOfDay == undefined ? console.log('error')
    :console.log(numOfDay);
}
dayOfWeek('Invalid');
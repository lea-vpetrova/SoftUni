function daysInMonth(month,year) {
    let date = new Date(year, month,0);
    let daysNum = date.getDate();
    console.log(daysNum);
}
daysInMonth(2, 2021);
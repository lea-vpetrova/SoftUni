function stringLength(str1, str2, str3) {
    let sumLength = str1.length + str2.length + str3.length;
    let avgLength = Math.floor(sumLength/3);
    console.log(sumLength);
    console.log(avgLength);
}
stringLength('pasta', '5', '22.3');
function formatGrate(grade) {
    let lable;
    if (grade < 3) {
        lable = 'Fail';
        grade = 2;
    }
    else if (grade >= 3.00 && grade<3.50) {
        lable = 'Poor';
        grade = grade.toFixed(2);
    }
    else if (grade >= 3.50 && grade < 4.50) {
        lable = 'Good';
        grade = grade.toFixed(2);
    }
    else if (grade >= 4.50 && grade < 5.50) {
        lable = 'Very good';
        grade = grade.toFixed(2);
    }
    else {
        lable = 'Excellent';
        grade = grade.toFixed(2);
    }

    console.log(`${lable} (${grade})`);
}
formatGrate(3.33);
formatGrate(4.50);
formatGrate(2.99);
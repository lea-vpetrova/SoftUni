function School(input){
    let schoolGrades = {};
    for (let record of input) {
        let tokens = record.split(' ');
        let studentName = tokens.shift();
        let grades = tokens.map(Number);
        if (schoolGrades.hasOwnProperty(studentName)) {
            schoolGrades[studentName] = schoolGrades[studentName].concat(grades);
        }
        else{
            schoolGrades[studentName] = grades;
        }
    }
    let sortedStudents = Object.keys(schoolGrades).sort();
    let result = sortedStudents.map(person => {
                let grades = schoolGrades[person];
                let averageGrade = (grades.reduce((sum, grade) => sum + grade, 0) / grades.length).toFixed(2);
                return `${person} : ${averageGrade}`;
    });
    
    console.log(result.join('\n'));
}
School(['Lilly 4 6 6 5',

    'Tim 5 6',

    'Tammy 2 4 3',

    'Tim 6 6']);
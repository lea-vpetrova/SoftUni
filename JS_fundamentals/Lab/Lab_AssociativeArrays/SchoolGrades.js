function School(input){
    let map = new Map();
    let sum = 0, count = 0;
    for (let record of input) {
        let tokens = record.split(' ');
        let student = tokens.shift();
        let grades = tokens.map(Number);
        for (let mark of grades) {
            sum+=mark;
            count++;
            if(!map.has(student)){
                sum;
            }
            else{
                let curGrade = map.get(student);
                sum = curGrade += mark;
            }
        }
        let avgGrade = (sum/count).toFixed(2);
        map.set(student,avgGrade);
    }
    for (let kvp of map) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
}
School(['Lilly 4 6 6 5',

    'Tim 5 6',

    'Tammy 2 4 3',

    'Tim 6 6']);
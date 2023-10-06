function grad(input) {
    let name = input[0];
    let grades = 1;
    let index = 0;
    let excluded = 0;
    let sum = 0;

    while (grades <= 12) {
        index++;
        let grade = Number(input[index]);
        if (grade < 4.00) {
            excluded++;
        }
        if (excluded >= 1) {
                console.log(`${name} has been excluded at ${grades} grade`);
                break;
            }
        sum += grade;
        grades++;
    }
    let avarage = sum / 12;
    if (excluded <1 ) {
        console.log(`${name} graduated. Average grade: ${avarage.toFixed(2)}`);
    }
}
grad(['Mimi',
'5',
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"]);
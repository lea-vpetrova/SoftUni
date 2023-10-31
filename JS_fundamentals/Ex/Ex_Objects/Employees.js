function employeesList(input) {
    let employee = {}
    
    for (let index = 0; index < input.length; index++) {
       employee = {
        name: input[index],
        personalNum: input[index].length
       };
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNum}`);
    }
    
}
employeesList([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);
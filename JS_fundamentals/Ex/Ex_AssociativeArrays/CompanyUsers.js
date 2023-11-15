function companyUsers (input) {
    let companyEmployees ={};
    for(let employee of input){
        let [company, id] = employee.split(' -> ');

        if(company in companyEmployees){
            if(!companyEmployees[company].includes(id)){
                companyEmployees[company].push(id);
            }
        }
        else{
            companyEmployees[company] =[id];
        }
    }

    let entries = Object.entries(companyEmployees).sort((a,b) => a[0].localeCompare(b[0]));
    for (let [name, id] of entries) {
        console.log(name);
        id.forEach(id => console.log(`-- ${id}`));
    }
}
companyUsers(['SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345']);
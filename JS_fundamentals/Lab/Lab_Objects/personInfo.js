function personInfo(firstName, lastName, age) {
    let person ={};
    person.firstName = firstName;
    person.lastName = lastName;
    person.age = age;
    return person;
}

let result = personInfo('Lea', 'Raycheva', 20);
console.log(result);
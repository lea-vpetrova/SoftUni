function projectCreation(input) {
    let architectName = input[0];
    let projectCount = Number(input[1]);
    let totalHour = projectCount * 3;
    console.log(`The architect ${architectName} will need ${totalHour} hours to complete ${projectCount} project/s`);
}
projectCreation(["George","4"]);
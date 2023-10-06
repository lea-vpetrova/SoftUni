function fishTank(input) {
    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3])/100;;
    let volumeInLitres = (lenght*width*height) /1000;
    let waterNeeded = volumeInLitres*(1-percent);
    console.log(waterNeeded);
}
fishTank(["85","75","47","17"]);
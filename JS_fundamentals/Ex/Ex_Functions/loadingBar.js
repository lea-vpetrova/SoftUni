function loadingBar(number) {
    if (number < 100) {
       let procentBar = `${number}% [${'%'.repeat(number/10)}${'.'.repeat(10-number/10)}]`;
       console.log(procentBar);
       console.log('Still loading...');
    }
    else {
        console.log('100% Complete!');
    }  
}
loadingBar(100);
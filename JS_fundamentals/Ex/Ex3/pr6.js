function solve(arr) {
    if (arr.length == 1) {
        console.log(0);
        return;
    }
    let isTrue = false;
    for (let i = 0; i < arr.length; i++) {
        let sumL=0,sumR=0;
        
        for (let j = 0; j < i; j++) {
            sumL += arr[j];
        }
        for (let j = i + 1; j < arr.length; j++) {
            sumR += arr[j];
        }

        if (sumL === sumR) {
            console.log(i); 
            isTrue = true  ;
        }
    }
    if (!isTrue) {
        console.log('no');
    }
    
}
solve([1,2,3,3]);
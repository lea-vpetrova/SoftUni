function equalArrays(arr1,arr2) {
    let sum = 0;let isEqual = true; let temp = 0;
    if (arr1.length != arr2.length) { console.log("Arrays are not equal!"); return 0; }
    for (let i = 0; i < arr1.length; i++) {
        arr1[i] = Number(arr1[i]);
        arr2[i] = Number(arr2[i]);
        if (arr1[i] !== arr2[i]) { isEqual = false; temp = i; }
        sum += arr1[i];
    }
    if (isEqual) {
        console.log(`Arrays are identical. Sum: ${ sum }`);
    }
    else {
        console.log(`Arrays are not identical. Found difference at ${ temp } index`);
    }    
}
equalArrays(['10', '20', '30'], ['10', '20', '30']);
function nthElementsOfArray(arr, step) {
    for (let i = 0; i < arr.length; i+=step) {
        console.log(arr[i]);
    }
}
nthElementsOfArray(['5','20','31','4','20'],2);
nthElementsOfArray(['dsa', 'asd', 'test', 'tset'], 2);

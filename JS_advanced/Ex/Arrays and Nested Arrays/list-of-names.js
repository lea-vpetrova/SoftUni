function listOfNames(arr) {
    arr.sort((a,b)=>a.localeCompare(b))
        .map((name,i)=>console.log(`${i+1}.${name}`));
}
listOfNames(["John","Bob","Christina",`Ema`]);

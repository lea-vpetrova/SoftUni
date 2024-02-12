function solve(areaFn, volFn, input) {
    const data = JSON.parse(input);
    const result =[];
    for (let fig of data) {
        result.push({
            area: Math.abs(areaFn.call(fig)),
            volum: Math.abs(volFn.call(fig))
        });
    }
    return result;
}
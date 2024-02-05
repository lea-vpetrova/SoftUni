function extract(elementId) {
    let p = document.getElementById(elementId).textContent;
    let pattern = /\(([^)]+)\)/g;
    let result = [];

    let match = pattern.exec(p);
    while(match){
        result.push(match[1]);
        match = pattern.exec(p);
    }
    return result.join('; ');
}
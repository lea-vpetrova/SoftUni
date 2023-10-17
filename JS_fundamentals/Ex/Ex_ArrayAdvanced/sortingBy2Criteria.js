function sortingBy2Criterias(arr) {
    let sortedArr = arr.sort((a,b) => a.length - b.length || a.localeCompare(b));
    console.log(sortedArr.join('\n'));
}
sortingBy2Criterias(['alpha', 'beta', 'gamma']); //beta alpha gamma

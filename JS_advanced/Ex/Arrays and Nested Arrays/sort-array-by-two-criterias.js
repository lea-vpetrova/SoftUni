function sortByTwoCriterias(arr) {
    const twoCriteriaSort = (cur, next) =>
        cur.length - next.length || cur.localeCompare(next);
    arr.sort(twoCriteriaSort);
    arr.forEach(el => { console.log(el) });
}
sortByTwoCriterias(['test', 'Deny', 'omen', 'Default']);
function sumLastKNumbersSequence(n,k) {
    let seq = [1];
    for (let i = 0; i < n; i++) {
        let start = Math.max(0,i-k);
        let end = i - k;
        let sum = start + end;
        seq[i] = sum;
    }
    console.log(seq.join(' '));
}
sumLastKNumbersSequence(6, 3)
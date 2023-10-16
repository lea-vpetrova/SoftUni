function sumLastKNumbersSequence(n,k) {
    let seq = [1];
    while (n > seq.length) {
        let newSeq = seq.slice(-k);
        let sum = 0;
        for (let i = 0; i < newSeq.length; i++) {
            sum += newSeq[i];
        }
        seq.push(sum);
    }
    console.log(seq.join(' '));
}
sumLastKNumbersSequence(6, 3)
function hamming(n) {
  const seq = [1];
  let i = 0,
    j = 0,
    k = 0;
  for (let a = 1; a < n; a++) {
    const x = Math.min(2 * seq[i], 3 * seq[j], 5 * seq[k]);
    seq.push(x);
    if (2 * seq[i] <= x) i++;
    if (3 * seq[j] <= x) j++;
    if (5 * seq[k] <= x) k++;
  }
  return seq[n - 1];
}

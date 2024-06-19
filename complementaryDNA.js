'use strict';

/* function dnaStrand(dna) {
  return dna
    .split('')
    .map(letter => {
      if (letter === 'A') return (letter = 'T');
      else if (letter === 'T') return (letter = 'A');
      else if (letter === 'C') return (letter = 'G');
      else if (letter === 'G') return (letter = 'C');
    })
    .join('');
} */

function dnaStrand(dna) {
  return dna
    .split('')
    .map(letter => pairs[letter])
    .join('');
}
const pairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
};

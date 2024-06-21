'use strict';

function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split('')
    .map(function (char, index, arr) {
      return arr.filter(item => item === char).length > 1 ? ')' : '(';
    })
    .join('');
}

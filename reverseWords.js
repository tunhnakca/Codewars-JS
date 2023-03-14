'use strict';

function reverseWords(str) {
  return str
    .split(' ')
    .map(mov => mov.split('').reverse().join(''))
    .join(' ');
}

'use strict';

const alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

function alphabetPosition(text) {
  return text
    .toLowerCase()
    .split(' ')
    .join('')
    .split('')
    .map(function (val) {
      if (alphabet.includes(val)) {
        return alphabet.indexOf(val) + 1;
      }
    })
    .filter(val => val !== undefined)
    .join(' ');
}

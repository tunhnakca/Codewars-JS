'use strict';

// The simplest form
function isPangram(string) {
  string = string.toLowerCase();
  return 'abcdefghijklmnopqrstuvwxyz'.split('').every(function (x) {
    return string.indexOf(x) !== -1;
  });
}

/*
// Other simplest form
function isPangram(string) {
  return 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .every(x => string.toLowerCase().includes(x));
}

//More complex form with different perspective
function isPangram(string) {
  const alph = [
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

  const arr = string.split(' ').join('').toLowerCase().split('').sort();
  const arrUnique = [...new Set(arr)];
  let lastArrUnique;

  if (arrUnique.length !== 26) {
    lastArrUnique = arrUnique.slice(arrUnique.length - 26);
  } else {
    lastArrUnique = arrUnique;
  }

  if (alph.join('') === lastArrUnique.join('')) {
    return true;
  } else {
    return false;
  }
}
*/

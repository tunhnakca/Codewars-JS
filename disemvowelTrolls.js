'use strict';

function disemvowel(str) {
  const vowelArr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  return str
    .split('')
    .filter(cur => !vowelArr.includes(cur))
    .join('');
}

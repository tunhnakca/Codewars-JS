'use strict';

function solution(number) {
  let arrToEnteredNumber = [];

  for (let i = 1; i < number; i++) {
    arrToEnteredNumber.push(i);
  }
  const sum = arrToEnteredNumber
    .filter(mov => mov % 3 === 0 || mov % 5 === 0)
    .reduce((acc, curr) => acc + curr, 0);

  return sum;
}

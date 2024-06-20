'use strict';

function josephusSurvivor(n, k) {
  return n < 1 ? 1 : ((josephusSurvivor(n - 1, k) + --k) % n) + 1;
}
console.log(josephusSurvivor(7, 3));

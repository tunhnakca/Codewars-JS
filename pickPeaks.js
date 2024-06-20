'use strict';

function pickPeaks(arr) {
  const pos = [];
  const peaks = [];

  for (let i = 1; i < arr.length - 1; i++) {
    let next = 1;
    while (arr[i] === arr[i + next]) next++;

    if (arr[i] > arr[i - 1] && arr[i] > arr[i + next]) {
      pos.push(i);
      peaks.push(arr[i]);
    }
  }
  return { pos, peaks };
}

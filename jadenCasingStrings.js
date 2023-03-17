'use strict';

String.prototype.toJadenCase = function () {
  return this.split(' ')
    .map(mov => mov.replace(mov[0], mov[0].toUpperCase()))
    .join(' ');
};


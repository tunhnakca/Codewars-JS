'use strict';

function cakes(recipe, available) {
  return Object.keys(recipe).reduce(function (acc, ingredient) {
    return Math.min(
      Math.floor(available[ingredient] / recipe[ingredient] || 0),
      acc
    );
  }, Infinity);
}

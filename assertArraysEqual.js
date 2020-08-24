
const eqArrays = require('./eqArrays');
assertArraysEqual = (array1, array2) => {
  if (eqArrays(array1, array2)) {
    console.log(`${String.fromCodePoint(0x1F600)}Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`${String.fromCodePoint(0x1F601)}Assertion failed ${array1} !== ${array2}`);

  }
};
assertArraysEqual([1, 2, "3"], [3, 2, 1]);
module.exports = assertArraysEqual;
const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
assertArraysEqual(middle([1,2,3,67]),middle([1,2,3,4]));
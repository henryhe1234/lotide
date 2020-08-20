const eqArrays = (array1, array2) => {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};
const assertArraysEqual = (array1, array2) => {
  if (eqArrays(array1, array2)) {
    console.log(`${String.fromCodePoint(0x1F600)}Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`${String.fromCodePoint(0x1F601)}Assertion failed ${array1} !== ${array2}`);

  }
};
const findIndex = function (string, target) {
  let indices = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === target) indices.push(i);
  }
  return indices;
};
const letterPositions = function (sentence) {
  const results = {};
  let newSentence = sentence.replace(/ /g, "");
  for (let letter of newSentence) {
    results[letter] = findIndex(sentence, letter);
  }
  return results;
};
console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("hello").e, [1]);
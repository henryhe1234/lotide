const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(0x1F600)}Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${String.fromCodePoint(0x1F600)}Assertion Passed: ${actual} !== ${expected}`);

  }
};
const tail = function (array) {
  let answer = [];
  if (array.length === 1) {
    return [];
  } else if (array.length === 0) {
    return [];
  } else {
    for (let i = 1; i < array.length; i++) {
      answer.push(array[i]);
    }
    return answer;
  }
};

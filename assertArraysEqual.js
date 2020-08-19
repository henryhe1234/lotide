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
    console.log(`${String.fromCodePoint(0x1F600)}Assertion failed ${array1} !== ${array2}`);

  }
};
assertArraysEqual([1, 2, "3"], [3, 2, 1]);
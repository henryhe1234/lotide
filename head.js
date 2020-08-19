const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(0x1F600)}Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${String.fromCodePoint(0x1F600)}Assertion Passed: ${actual} !== ${expected}`);

  }
};
const head = function(array) {
  if (array === null) {
    return undefined;
  }
  return array[0];
};
console.log(head([1]));
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
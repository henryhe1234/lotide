const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(String.fromCodePoint(0x1F600) + "Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log(String.fromCodePoint(0x1F625) + "Assertion failed: " + actual + " !== " + expected);

  }
};
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(2, 3);

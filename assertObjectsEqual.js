const eqObjects = require('./eqObjects');


const assertObjectsEqual = (object1, object2) => {
  const inspect = require('util').inspect
  if (eqObjects(object1, object2)) {
    console.log(`${String.fromCodePoint(0x1F600)}Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`${String.fromCodePoint(0x1F601)}Assertion failed ${inspect(object1)} !== ${inspect(object2)}`);

  }
};
// const cd = { c: "1", d: ["2",3,5],e:8 };
// const dc = { d: ["2", 3], c: "1" };
// // console.log(eqObjects(cd, dc)); // => true

// const cd2 = { c: "1", d: ["2",3,5],e:8};
// assertObjectsEqual(cd,cd2);
module.exports = assertObjectsEqual;
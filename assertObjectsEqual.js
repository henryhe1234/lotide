const eqArrays = (array1, array2) => {
  if(array1.length !== array2.length){
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};
const eqObjects = function (object1, object2) {
  let arrayKey1 = Object.keys(object1);
  let arrayKey2 = Object.keys(object2);
  if (arrayKey1.length !== arrayKey2.length) {
    return false;
  }
  for (let key of arrayKey1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if(!eqArrays(object1[key],object2[key])){
        return false;
      }
    } else {
      if(object1[key] !== object2[key]){
        return false;
      }
      
    }
  }
  return true;
};
const assertObjectsEqual = (object1, object2) => {
  const inspect = require('util').inspect
  if (eqObjects(object1, object2)) {
    console.log(`${String.fromCodePoint(0x1F600)}Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`${String.fromCodePoint(0x1F601)}Assertion failed ${inspect(object1)} !== ${inspect(object2)}`);

  }
};
const cd = { c: "1", d: ["2",3,5],e:8 };
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2",3,5],e:8};
assertObjectsEqual(cd,cd2);
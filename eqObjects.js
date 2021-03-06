
const eqArrays = require('./eqArrays');

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
module.exports = eqObjects;
// const cd = { c: "1", d: ["2",3,5],e:6 };
// // const dc = { d: ["2", 3], c: "1" };
// // console.log(eqObjects(cd, dc)); // => true

// const cd2 = { c: "1", d: ["2",3,5],e:8 };
// console.log(eqObjects(cd, cd2)); // => false
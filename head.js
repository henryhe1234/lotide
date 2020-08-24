const assertEqual = require('./assertEqual')
const head = function(array) {
  if (array === null) {
    return undefined;
  }
  return array[0];
};
module.exports = head;


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
module.exports = tail;

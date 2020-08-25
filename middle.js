const eqArrays = (array1, array2) => {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const middle = (array) => {
  let answer = [];
  if(array.length <= 2){
    return answer;;
  }else if(array.length % 2 !== 0){
    answer.push(array[Math.floor(array.length / 2)]);
  }else{
    answer.push(array[array.length /2 -1],array[array.length/2]);
  }
  console.log(answer);
  return answer;
};

module.exports = middle;

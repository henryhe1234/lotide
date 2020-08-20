const flatten = function(array){
  let newArray = [];
  for(let element of array){
    if(!Array.isArray(element)){
      newArray.push(element);
    }else{
      for(let piece of element){
        newArray.push(piece)
      }
    }
  }
  return newArray;
};
console.log(flatten([1, 2, [3, 4], 5, [6]]));
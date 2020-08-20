const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(0x1F600)}Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${String.fromCodePoint(0x1F607)}Assertion failed: ${actual} !== ${expected}`);

  }
};
const countletters = function(sentences){
  let result = {};
  let newSentences = sentences.replace(/ /g,"");
  for(const letter of newSentences){
    (result[letter]) ? result[letter] ++ : result[letter] = 1;
  }
  return result;
};
console.log(countletters("Lighthouse in the house"));
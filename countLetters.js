
const countletters = function(sentences){
  let result = {};
  let newSentences = sentences.replace(/ /g,"");
  for(const letter of newSentences){
    (result[letter]) ? result[letter] ++ : result[letter] = 1;
  }
  return result;
};
// console.log(countletters("Lighthouse in the house"));
module.exports = countletters;
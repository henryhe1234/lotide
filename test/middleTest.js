const middle = require('../middle');
const assert = require('chai').assert;

describe('#middle', () => {
  it('returns [5] for [1,5,2]', () => {
    assert.deepEqual(middle([1,5,3]), [5]);
  });
  it('should return [2,3] for [1,2,3,4]',()=>{
    assert.deepEqual(middle([1,2,3,4]),[2,3]);
  });
  it('should return [] when pass [1]', ()=> {
    assert.deepEqual(middle([1]),[]);
  });
  
});
const tail = require('../tail');
const assert = require('chai').assert;

// assertEqual(tail([5,6,7]).length,2);
describe('#tail', () => {
  it('returns [6,7] for [5,2,3]', () => {
    assert.deepEqual(tail([5,6,7]), [6,7]);
  });
  
});
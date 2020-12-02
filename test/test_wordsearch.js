const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')
const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

const lettersToSearch =[
  ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
  ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
  ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
];

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch(lettersToSearch, 'FRANK')
    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch(lettersToSearch, 'SEINFELD')
    assert.isTrue(result);
  });
  it('should return true if word is present', function() {
    const result = wordSearch(lettersToSearch, 'FELD')
    assert.isTrue(result);
  });
  it('should return true if word is present', function() {
    const result = wordSearch(lettersToSearch, 'LARRY')
    assert.isTrue(result);
  });
  it('should return false if word is not present', function() {
    const result = wordSearch(lettersToSearch, 'TAMMY')
    assert.isFalse(result);
  });
  it('should return false if word is present', function() {
    const result = wordSearch([], 'LARRY')
    assert.isFalse(result);
  });
  it('should return true if word is present', function() {
    const result = wordSearch(lettersToSearch, 'DLEFNIES')
    assert.isTrue(result);
  });
  // it('should return true if word is present diagonally', function() {
  //   const result = wordSearch(lettersToSearch, 'FURL');
  //   assert.isTrue(result);
  // })
  
});

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')

    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });
});

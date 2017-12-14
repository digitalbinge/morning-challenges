let assert = require('assert');
let spinWords = require('../39_spin_words');

describe("Spin words", function() {
  it("should reverse a word over 5 characters", function() {
    assert.equal(spinWords('hello'), 'olleh');
  });
});
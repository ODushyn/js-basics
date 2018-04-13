let capFirstLowLast = require('../src/strings/practice/1');

describe("Strings:", function() {
  'use strict';

  it("[strings-1] should capitalize first letter and put last one in lower case", function() {
    expect(capFirstLowLast('hellO')).toBe('Hello');
    expect(capFirstLowLast('HellO')).toBe('Hello');
    expect(capFirstLowLast('hello')).toBe('Hello');
    expect(capFirstLowLast('Hello')).toBe('Hello');
  });

  it("[strings-2] should capitalize first letter and put last one in lower case", function() {
    
  });
});

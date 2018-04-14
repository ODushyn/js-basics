let capFirstLowLast = require('../src/strings/practice/1');
let checkFruits = require('../src/strings/practice/2');
let truncate = require('../src/strings/practice/3');
let getCurrency = require('../src/strings/practice/4');

describe("Strings:", function() {
  'use strict';

  it("[strings-1] should capitalize first letter and put last one in lower case", function() {
    expect(capFirstLowLast('hellO')).toBe('Hello');
    expect(capFirstLowLast('HellO')).toBe('Hello');
    expect(capFirstLowLast('hello')).toBe('Hello');
    expect(capFirstLowLast('Hello')).toBe('Hello');
  });

  it("[strings-2] should check fruits", function() {
    expect(checkFruits('Great apples').toBe(true));
    expect(checkFruits('Great ApPles').toBe(true));
    expect(checkFruits('Great pears').toBe(true));
    expect(checkFruits('Great Pears').toBe(true));
    expect(checkFruits('Great bananas!').toBe(false));
  });

  it('[strings-3] truncate string', () => {
    expect(truncate('Hello World', 5)).toBe('Hell...');
    expect(truncate('Hello World', 10)).toBe('Hello Wor...');
  });

  it('[strings-4] should ', () => {
    expect(getCurrency('140$')).toBe(140);
  });
});

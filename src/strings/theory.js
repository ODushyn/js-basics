/*
    Strings are used to represent text data.
    There is no another way to represent string data in js.
*/


/* 1. String creation */
let singleQuotesStr = 'Hello World!';
let doubleQuotesStr = "Hello World!";
// There is no difference between using single or double quotes for string creation.
// However, there is an unspoken rule to use single quotes inside .js files and double quotes for .html files.
console.log('Single quotes string: ' + singleQuotesStr); // Single quotes string: Hello World!
console.log('Double quotes string: ' + doubleQuotesStr); // Double quotes string: Hello World!

/* 2. String length */
let strLength = singleQuotesStr.length;
console.log('String length: ' + strLength); // String length: 12

/* 3. Access specific char. */
let secondChar1 = singleQuotesStr[1];
// There is no type like "char". Method charAt(n) returns a new string.
let secondChar2 = singleQuotesStr.charAt(1);
console.log('Second char is: ' + secondChar1); // e
console.log('Second char is: ' + secondChar2); // e

/* 4. Changing string. REMEMBER: strings are immutable! */
// Strings are immutable -  it is not possible to change the string.
// The only way to change the string is to create a new one based on existing one.
let thirdChar = singleQuotesStr[2]; // l
let eightChar = singleQuotesStr[7]; // o
let ninthChar = singleQuotesStr[8]; // r
let eleventhChar = singleQuotesStr[10]; // d
console.log(thirdChar + eightChar + ninthChar + eleventhChar); // lord

/* 5. Change string to lower or upper case */
console.log('UPPERCASE: ' + singleQuotesStr.toUpperCase());
console.log('lowercase: ' + singleQuotesStr.toLowerCase());

/* 6. Finding the substring */
// For finding the substring indexOf(searchValue[, fromIndex]) method is used.
// Returns the index of the first occurrence of searchValue, or -1 if not found.
let helloStartIndex = singleQuotesStr.indexOf('Hello');
console.log(helloStartIndex); // 0
let worldStartIndex = singleQuotesStr.indexOf('World');
console.log(worldStartIndex); // 6
// not found
let buyStartIndex = singleQuotesStr.indexOf('Buy');
console.log(buyStartIndex); // -1
// with fromIndex
console.log(singleQuotesStr.indexOf('o')); // 4
console.log(singleQuotesStr.indexOf('o', 5)); // 7

// This method helps to check wether string contains specific substring or not.
let isContainingHello = helloStartIndex > -1;
console.log(isContainingHello); // true
let isContainingBuy = buyStartIndex > -1;
console.log(isContainingBuy); // false

/* 7. Getting substring of the string */
// 7.1 Method substring(start [, end])
console.log(singleQuotesStr.substring(2, 4)); // ll
// if no end param
console.log(singleQuotesStr.substring(1)); // ello World!

// 7.2 Method substr(start [, length]) is used for that
console.log(singleQuotesStr.substr(2, 5)); // llo W
// if no end param
console.log(singleQuotesStr.substr(1)); // ello World!

// 7.3 Method slice(start [, length]) - same as substring
console.log(singleQuotesStr.slice(2, 4));


/* 8. String comparison and encoding (UNICODE) */
console.log('a'.charCodeAt(0)); // 97
console.log('b'.charCodeAt(0)); // 98
console.log(String.fromCharCode(97)); // a
console.log(String.fromCharCode(98)); // b
console.log('a' > 'b'); // false

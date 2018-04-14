/*
    Arrays are used to store objects. Each element in the array get numeric index.
    For example, arrays are used to store data lists: list of products or list of tasks.
    Arrays are often used to store data that is going to be displayed in html tables. 
*/

/* 1. Array creation */
let arr1 = [];
let arr2 = ['hello', 'world', '!'];
// array may contain different data types - BAD PRACTICE!
let arr3 = ['hello', 21, {a: 6}, []];
console.log(arr1);
console.log(arr2);
console.log(arr3);

/* 2. Array length */
let arrLength = arr2.length;
console.log("Array length: " + arrLength); // 3


/* 3. Indexing */
// Array's elements are ordered and each number can be retrieved by it's index.
// First element has index = 0, last one - (n-1), where n - array length.
console.log(arr2[0]); // 'hello'
console.log(arr2[2]); // '!'
// - 
console.log(arr2.length - 1); // '!'


/* 4. Alter array */
arr1[0] = 'New element';
console.log(arr1); // ['New element']
arr1[0] = 'New element2';
console.log(arr1); // ['New element2']

/* 5. Array most frequently used methods */

//  - Add element to the end of array
arr2.push('?');
console.log(arr2); // [ 'hello', 'world', '!', '?' ]
// - Remove element from end of array
arr2.pop();
console.log(arr2); // [ 'hello', 'world', '!']

// - Iterating through the array
// using `for` loop
for (let index = 0; index < arr2.length; index++) {
    console.log(index + ': ' + arr2[index]);
}
// using forEach
arr2.forEach((element, index) => {
   console.log(index + ': ' + element); 
});

// es6 methods - filter, map - returns new array!
let numberArray = [1, 5, 3, 2];
let newNumberArray = numberArray.filter((elem, index) => {
    return elem > 2;
});
console.log(newNumberArray);

let newMappedArray = numberArray.map((elem, index) => {
    return elem * 2;
});
console.log(newMappedArray);


/* 6. Multi dimension arrays */
var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
console.log( matrix[0][2]);




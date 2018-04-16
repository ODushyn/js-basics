/**
 * 1. What is the difference between == and === ?
 */
console.log("12" == 12); // true
console.log("12" === 12); // false

/**
 * 2. What will be the result of next program?
 */
var a = {
  b: 12,
};
//console.log(a.c.d); // Cannot read property 'd' of undefined

/**
 * 3. Objects are passed by reference, primitives - by value.
 */

var a = {
  prop: 0,
};
var c = a; // now object c has same reference as object b
c.prop = 10; // change prop value in object c
console.log(a.prop); // property prop in a object changed as well!!! Was 0, but now is 10.

/**
 * 4. What is closure? Write function mult(a)(b) that returns a*b;
 */
// Closure is ...
function mult(a) {
  return function(b) {
    // a is available here from closure!
    return a * b;
  };
}
console.log(mult(1)(2));

/**
 * 5. What is the difference between function expression and declaration?
 */
// Function Declaration
function sum(a, b) {
  return a + b;
}
// Function Expression
var sum = function(a, b) {
  return a + b;
};

// The main difference: function declarations are created before code execution by interpretator(hoisting).
// aa(); // Error: aa is not a function, because aa is function expression!
bb(); // Works! Prints bb,  because bb is function declaration;
console.log(b); // undefined, because interpretator lifts up only that b is declared but it does not initialize it!
var b = 4;
var aa = function() {
  console.log("aa");
};
function bb() {
  console.log("bb");
}
// Also, function declarations may be used to write recursion functions because it has a name.
// Recursion it is when function call itself
function funcWithRecursion(i) {
  if (i > 10) {
    return i;
  } else {
    i++;
  }
  // recursion, calling itself
  return funcWithRecursion(i);
}
console.log(funcWithRecursion(1)); // 11

/**
 * 6. What is arguments in function? What is it used for?
 */
// Function may receive more input parameters(arguments) then it's specified in function declaration.
function manyParam(a) {
  console.log(a);
}
manyParam(1, "hello", { a: 2 }, 1); // will work fine without errors.
// It used to get those(extra) parameters that were passed into function even if function does not specify them
// Arguments in a !PSEUDO! array. Mainly it's an object with keys as numbers and property length.
function argFunction(a) {
  console.log(arguments[0]); // same as console.log(a)
  console.log(arguments[1]); // second argument
}
console.log(argFunction(1, 2, 3));

/**
 * 7. What are data types exist in JS?
 */
// 1. String
// 2. Boolean
// 3. Null
// 4. undefined
// 5. Array
// 6. Symbol (ES6)
// 7. Object

/**
 * 8. What is callback function?
 */
// Callback function is a function that is passed into another one and will be called later.
let arr = [1, 2];
[1.2].forEach(function(element, index) {
  // this is a callback function;
});

let callbackFunc = function() {
  console.log("I a callback function");
};
// pass  callback function inside another function as argument and call it
function receiveCallback(func) {
  func();
}
receiveCallback(callbackFunc); // prints I am callback function

/**
 * 9. What is a string? What are main methods to work with them
 */
// String is an array of chars. Used to manipulate with text
// Length property
// Often used methods: indexOf, slice, substr
// Access element str[index]

/**
 * 10. Write a function that reverse a string
 */
// Your code here

/**
 * 11. What are arrays? What are main methods to work with them?
 */
// Array is a data structure mainly for holding ordered data. (for example for displaying the data in the tables)
// length property: [1,2,3].length
// methods: forEach, filter, map

/**
 * 12. What is an object?
 */
// Object is data structure that represents data in key-value way(associative array).
// check if property exist in the object: let isPropExist = (prop in obj)

/**
 * 13. How iterate through the array?
 */
// Using loops
// for
let array = [];
for (let index = 0; index < array.length; index++) {
}
// forEach
[].forEach(function(elem){

});
// while/ do-while
//while(){
//}

/**
 * 14. What will program print?
 */
let myArr = [1,2];
myArr[5] = 5;
console.log(myArr); // [ 1, 2, <3 empty items>, 5 ]

/**
 * 15. What is the difference between null and undefined?
 */
// undefined is used to show that variable exists but not defined(has value undefined).
// null is a reference to nothing. When program(garbage collector) sees unused objects with null value it removes them from memory.

/**
 * 16. Difference between var and let?
 */
// var scope is a function it was declared in, let scope is a block. Let is more strict.
function varlet() {
  {
    var aVar = 5;
    let bLet = 6;
  }
  console.log(aVar); // 5
  //console.log(bLet); //Error: bLet is not defined
}
varlet();

/**
 * 17. What is 'use strict' mode?
 */
// Used to apply more strict rules on programer.
// For example: in strict mode programmer should always declare variable before using it
// not strict mode: a = 5 - works fine
// strict mode: must be var a = 5.

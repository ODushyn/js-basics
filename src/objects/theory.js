/*
    Objects JS are associative arrays. They keep data in key-value way.
*/

/* 1. Objects creation */
let myObject = {};
let myObject2 = {
  name: "Alona",
};
let myObject3 = {
  name: "Alona",
  age: 18,
  run: function() {
    console.log("run");
    return "Im running...";
  },
};

/* 2. Modify array */
// Adding new property
myObject.name = "Alona";
myObject["age"] = 5;
myObject.run = function() {
  return "I am running...";
};
// Modifying the property
myObject.age = 16;
// Deleting the property
delete myObject.age;

/* 3. Access specific element. */
console.log(myObject.name);
// Access  key by variable value
let str = 'age';
myObject[str] = 21;

/* 4. Check whether property exist or not  */
let isNameExist = myObject.name === undefined;
let isAgeExist = "name" in myObject;
/* Iterate through the properties */
for (let key in myObject) {
  console.log(key + ': ' + myObject);
}


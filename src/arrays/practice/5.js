/**
 * Write function that
 * take: array of numbers
 * return: new array with square values from source array using `for` loop
 * Example: arraySumWithForLoop([1,2,3]) -> [1, 4, 9]
 */
function sqrArrForLoop(arr) {
    let newNumberArray = [];
    for (let i = 0; i < arr.length; i++) {
        let sgrelm = arr[i] * arr[i];
        newNumberArray.push(sgrelm);
    }
    return newNumberArray;
}

console.log(sqrArrForLoop([1, 2, 33, 4]));


/**
 * Write function that
 * take: array of numbers
 * return: new array with square values from source array using `map` method
 * Example: arraySumWithForLoop([1,2,3]) -> [1, 4, 9]
 */
function sqrArrMapLoop(arr) {
    let newNumberArray = arr.map((elem, i) => {
        return elem * elem;
    });
    return newNumberArray;

}
console.log(sqrArrMapLoop([1, 2, 33, 4]));


function reverseString(str) {
    let newStr = '';
    for (let i = str.length-1; i >= 0; i--) {
        newStr = newStr + str[i];
    }
    return newStr;
}

console.log(reverseString('asdf'));

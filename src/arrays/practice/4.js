/**
 * Write function that
 * take: array of numbers
 * return: array with odd numbers only
 * Example: oddNumbersForLoop([0,1,2,3,6]) -> [1, 3]
 */

function oddNumbersForLoop(arr) {
    var a = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            a.push(arr[i]);
        }
    }
    return a;
}

console.log(oddNumbersForLoop([0, 1, 2, 3, 4, 5, 6]));


/**
 * Write function that
 * take: array of numbers
 * return: array with odd numbers only
 * Example: oddNumbersForLoop([0,1,2,3,6]) -> [1, 3]
 */

function oddNumbersFilterLoop(arr) {
    let newArray = arr.filter((elem, i) => {
        if (elem % 2 !== 0) { 
            return elem;
         }
    });
    return newArray;
}

console.log(oddNumbersFilterLoop([0, 1, 2, 3, 4, 5, 6]));
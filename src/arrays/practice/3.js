/**
 * Write function that
 * take: array of number
 * return: sum of elements in array using for loop
 * Example: arraySumWithForLoop([1,2,3]) -> 6
 */
function arraySumWithForLoop(arr) {
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        sum = sum + arr[index];
        //sum += arr[index];
    }
    return sum;
}

console.log(arraySumWithForLoop([1, 2, 3]));

/**
 * Write function that
 * take: array of number
 * return: sum of elements in array using forEach loop
 */
function arraySumWithForEachLoop(arr) {
    let sum = 0;

    arr.forEach(function (element) {
        sum = sum + element;
    });
    return sum;
}
console.log(arraySumWithForEachLoop([1, 2, 3]));

/**
 * Write function that prints array using "for" loop and console.log
 */
function loopWithFor(arr) {
    for (let index = 0; index < arr.length; index++) {
        console.log(index + ': ' + arr[index]);
    }
}

loopWithFor([1, 2, 3, 4, 5, 6]);
loopWithFor([, 2, 3, 4, ,]);
loopWithFor([]);
loopWithFor(['as', 'ásdew', 'lolo', 'Sas']);


/**
 * Write function that prints array using "forEach" loop and console.log
 */
function loopWithForEach(arr) {
    arr.forEach((element, index) => {
        console.log(index + ': ' + element);
    });
}

loopWithForEach([1, 2, 3, 4, 5, 6]);
loopWithForEach([, 2, 3, 4, ,]);
loopWithForEach([]);
loopWithForEach(['as', 'ásdew', 'lolo', 'Sas']);

function loopWhile(arr) {
    let i = 0;
    while (i <= arr.length - 1) {
        console.log(i + ': ' + arr[i]);
        i++;
    }
}

loopWhile([1, 2, 3, 4, 5, 6]);
loopWhile([, 2, 3, 4, ,]);
loopWhile([]);
loopWhile(['as', 'ásdew', 'lolo', 'Sas']);

function loopDoWhile(arr) {
    let i = 0;
    do {
        console.log('doWhile' + i + ': ' + arr[i]);
        i++;
    }
    while (i <= arr.length - 1);
}

loopDoWhile([1, 2, 3, 4, 5, 6]);
loopDoWhile([, 2, 3, 4, ,]);
loopDoWhile([]);
loopDoWhile(['as', 'ásdew', 'lolo', 'Sas']);
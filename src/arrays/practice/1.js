function arr1(arr) {
    let LastItem = arr[arr.length - 1];
    return LastItem;
}

console.log(arr1([1, 33, 5, 7, 8]));

function arr2(arr) {
    return arr[arr.length - 1];
}

console.log(arr2([1, 33, 5, 7, 8]));


function arr3(arr, n) {
    arr.push(n);
    return arr;
}

console.log(arr3([1, 33, 5, 7, 8], 9));
console.log(arr3([1, 33, 5, 7, 8], 10));


function arr4(arr) {
    let arrSong = ['Джаз', 'Блюз'];
    arrSong.push('Рок-н-Ролл»');
    arrSong[1] = 'Классика';
    arrSong.shift();
    arrSong.unshift('Рэп', 'Регги');

    return arrSong;
}

console.log(arr4());


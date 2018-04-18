// //reverse string
// function rev(a) {
//     return a.split('').reverse().join('');
// }

// console.log(rev("123"));

// function rev1(str) {
//     let rez = '';
//     for (var i = str.length - 1; i >= 0; i--) {
//         rez += str[i];
//     }
//     return rez;
// }

// console.log(rev1("123"));

// //Реализуйте функцию factorial(), которая возвращает факториал переданного ей числа.

// function factorial(n) {
//     if (n == 1) {
//         return 1;
//     } return factorial(n - 2) + factorial(n - 1);
// }

// console.log(factorial(5));

// function a(arr, callback) {
//     callback(arr);
// };

// var sum = function (arr) {
//     let sum1 = 0;
//     for (let index = 0; index < arr.length; index++) {
//         return sum1 = sum1 + arr[index];
//     }
//     console.log(sum1);
// };

// console.log(a([1, 2, 3]), sum);

var arr = ["a", "b"];

arr.push(function () {
    console.log(this)
});


console.log(arr[2]());

var obj = {
    go: function () {
        console.log(this);
    }
}

console.log(obj.go())


let calculator = {
    firstNumber: 0,
    secondNumber: 0,
    setFirstNum:  function (n) {
        this.firstNumber = n;
    },
    setSecondNum: function (n) {
        this.secondNumber = n;
    },
    sum: function (){
        return this.firstNumber + this.secondNumber;
    },
    read: function(a,b){
        this.firstNumber=a;
        this.secondNumber=b;
    }
} 

calculator.setFirstNum(1);
calculator.setSecondNum(2);


console.log(calculator.sum());

calculator.setFirstNum(5);
calculator.setSecondNum(6);
console.log(calculator.sum());

calculator.read(1,2);
console.log(calculator.sum());


//1 //
function args() {
    var c = [];
    for (var i = 0; i <= arguments.length - 1; i++) {
        c.push(arguments[i]);
    }
    return c;
}

console.log(args('1', 'Hello'));
console.log(args('1', 'Hello', 'Hi'));

//2 //
function args() {
    return arguments;
}

console.log(args('1', 'Hello', 'Hi'));

//3 //
function args() {
    var c = [];
    for (var i = 0; i <= arguments.length - 1; i++) {
        c.push(arguments[i]);
    }
    return c;
}
console.log(args('1', 'Hello'));
console.log(args('1', 'Hello', 'Hi'));

//4 //
function args() {
    return arguments;
}

console.log(args('1', 'Hello', 'Hi'));
//5 //
function log(a, callback) {
    console.log(callback(a));
}

var print = function (arr) {
    return arr;
};

log([1, 2, 3], print) //[1,2,3]

//6 //

function log(a, callback) {
    console.log(callback(a));
}

var sum = function (arr) {
    var c = 0;
    for (var i = 0; i <= arr.length - 1; i++) {
        c += arr[i];
    }
    return c;
};

log([1, 2, 3], sum); //6
log([12, 6], sum); //18

//7//

function log(a, callback) {
    console.log(callback(a));
}

var maxNumber = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > arr[0]) {
            arr[0] = arr[i];
        }
    }
}; return arr[0];

log([1, 2, 3, 7, 8], maxNumber); //8


//8//

let person1 = { name: 'Alona', age: '18' };
let person2 = { name: 'Sveta', age: '21' };
let person3 = { name: 'Sasha', age: '12' };
let person4 = { name: 'Lesha', age: '5' };

let people = [person1, person2, person3, person4];

function adults(people) {
    var arrPeople = [];
    for (var i = 0; i <= people.length - 1; i++) {
        if (people[i].age >= 18) {
            arrPeople.push(people[i]);
        }
    }
    return arrPeople;
}
console.log(adults(people)); // [ { name: 'Alona', age: '18' }, { name: 'Sveta', age: '21' } ]

//9//

let person1 = { name: 'Alona', age: '18' };
let person2 = { name: 'Sveta', age: '21' };
let person3 = { name: 'Sasha', age: '12' };
let person4 = { name: 'Lesha', age: '5' };

let people = [person1, person2, person3, person4];

function adults(people) {
    var arrPeople = [];
    for (var i = 0; i <= people.length - 1; i++) {
        if (people[i].name === 'Alona') {
            arrPeople.push(people[i]);
        }
    }
    return arrPeople;
}
console.log(adults(people)); // [ { name: 'Alona', age: '18' } ]

let person1 = { name: 'Alona', age: '18' };
let person2 = { name: 'Sveta', age: '21' };
let person3 = { name: 'Sasha', age: '12' };
let person4 = { name: 'Lesha', age: '5' };

let people = [person1, person2, person3, person4];

function adults(people) {
    var arrPeople = [];
    for (var i = 0; i <= people.length - 1; i++) {
        if (people[i].name = 18) {
            arrPeople.push(people[i]);
        }
    }
    return arrPeople;
}
console.log(adults(people)); // [ { name: 'Alona', age: '18' }, { name: 'Sveta', age: '21' } ]


people.forEach(function (item) {
    if (item.age >= 18) {
        newPeople.push(item);
    }
});

console.log(newPeople);
// [ { name: 'Alona', age: '18' }, { name: 'Sveta', age: '21' } ]

var newPeople = [];

people.forEach(function (item) {
    if (item.age >= 18) {
        newPeople.push(item);
    }
});

function newFunction(item) {
    if (item.age >= 18) {
        newPeople.push(item);
    }
}

console.log(newPeople);
// [ { name: 'Alona', age: '18' }, { name: 'Sveta', age: '21' } ]


var newPeople = [];

var newPeople = people.filter(function (people) {
    if (people.age >= 18) {
        return true;
    }
});


console.log(newPeople);
// [ { name: 'Alona', age: '18' }, { name: 'Sveta', age: '21' } ]

var newPeople = people.filter(function (item) {
    return item.age >= 18;
});


console.log(newPeople);
// [ { name: 'Alona', age: '18' }, { name: 'Sveta', age: '21' } ]

//

let person1 = { name: 'Alona', age: '18', salary: 50 };
let person2 = { name: 'Sveta', age: '21' };
let person3 = { name: 'Sasha', age: '12', salary: 90 };
let person4 = { name: 'Lesha', age: '5', salary: 110 };
let person = [person1, person2, person3, person4];

var adjustSalaries = person.map(function (person) {
    if (person.age >= 18 && person.salary == undefined) {
        person.salary = 100;
    }
    if (person.age >= 18 && person.salary < 100) {
        person.salary = 100;
    }
    if (person.age < 18) {
        delete person.salary;
    }

    return person;

});

console.log(adjustSalaries); // [ {name: 'Alona', age: '18', salary: 100}, {name: 'Sveta', age: '21', salary: 100}, {name: 'Sasha', age: '12'}, {name: 'Lesha', age: '5'}]

//

let person = {
    _name: 'Lu Xun',
    _age: 137,

    set age(ageIn) {
        if (typeof ageIn === 'number') {
            this._age = ageIn;
        }
        else {
            console.log('Invalid input');
            return 'Invalid input';
        }
    },

    get age() {
        console.log(`${this._name} is ${this._age} years old.`);
        return this._age;
    }

};


person.age = 'Thirty-nine';
person.age = 39;

console.log(person.age);

//


//
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 3, 8];

let unique1 = arr1.filter((o) => arr2.indexOf(o) === -1);
let unique2 = arr2.filter((o) => arr1.indexOf(o) === -1);

const unique = unique1.concat(unique2);

console.log(unique); // [ 2, 4, 5, 8 ]

//
function difference(arr1, arr2) {

    for (var i = 0; i <= arr1.length - 1; i++) {
        for (var j = 0; j <= arr2.length - 1; j++) {
            if (arr2[j] !== arr1[i] && arr1.indexOf(arr2[j]) === -1) {
                arr1.push(arr2[j]);
            }
        }
    } return arr1;
}

console.log(difference([1, 2, 3], [100, 2, 1, 10]));
console.log(difference([1, 2, 3], [1, 3, 4, 10]));

//

// isPrime

const isPrime = num => {
    for (let i = 0; i < num; i++) {
        if (num % i === 0) {
            return true;
        }
    }
    return num !== 1;
};

console.log(isPrime(17));

// Factorial

function factorial(num) {
    if (num == 1 || num == 0)
        return 1;
    return num * factorial(num - 1);
}

console.log(factorial(6)); // 720;
console.log(factorial(0)); // 1;
console.log(factorial(1)); // 1;

//fibonachi

function fib(num) {
    if (num == 1) {
        return 1;
    }
    else if (num == 0) {
        return 0;
    }
    return fib(num - 2) + fib(num - 1);
}

console.log(fib(10)); // 55;
console.log(fib(0)); // 0;
console.log(fib(1)); // 1;

//Создайте собственную реализацию функции filter(). 
//filter([1, 2, 3, 4], n => n < 3)    // [1, 2]

function filter(arr, arrFunc) {
    var arrNew = [];
    for (let i = 0; i < arr.length; i++) {
        let isArrFunc = arrFunc(arr[i]);
        if (isArrFunc) {
            arrNew.push(arr[i]);
        }
    }
    return arrNew;
}

console.log(filter([1, 2, 3, 4], function (n) {
    return n < 3;
}
)); //1,2

// Создайте собственную реализацию функции reduce().

//reduce([1, 2, 3, 4], (a, b) => a + b, 0) // 10

function reduce(arr, func, index) {
    var finalResult = 0;
    for (let i = index; i < arr.length; i += 2) {
        if (arr[i + 1]) {
            finalResult += func(arr[i], arr[i + 1]);
        } else {
            finalResult += arr[i];
        }
    }
    return finalResult;
}


console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0)) // 10
console.log(reduce([1, 2, 3, 4], (a, b) => a * b, 0)) // 14



//// reverse string
function reverse(str) {
    var strNew = '';

    for (let index = str.length - 1; index >= 0; index--) {
        strNew += str[index];
    }
    return strNew;
}

console.log(reverse('mamaK'));


// Создайте собственную реализацию функции indexOf() для массивов.

function indexOf(array, item) {
    for (let index = 0; index < array.length; index++) {
        if (array[index] === item) {
            return index;
        }
    } return -1;
}



console.log(indexOf([1, 2, 3], 1)); // 0

console.log(indexOf([1, 2, 3], 4)); // -1

//  Palindrome

function isPalindrome(str) {
    var strLen = str.length,
        strReverse = str.split('').reverse().join(''); //Разбиваем строку посимвольно  и превращаем ее в массив с помощью split(''), потом применяем к нему метод reverse() и собираем все символы в строку с помощью join('')
    if (strReverse.toUpperCase() == str.toUpperCase()) {
        return true;
    } else {
        return false;
    }
}


console.log(isPalindrome(''));                                // true
console.log(isPalindrome('abcdcba'));                         // true
console.log(isPalindrome('abcd'));                           // false
console.log(isPalindrome('A man a plan a canal Panama'));     // false

// Реализуйте функцию missing(), которая принимает неотсортированный массив уникальных чисел

function missing(arr) {
    arr.sort();
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] !== 1) {
            return arr[i] + 1;
        }

    }
}

console.log(missing([1, 2, 3]));
console.log(missing([]));
console.log(missing([5, 1, 4, 2]));


//

var arr = ["Есть", "жизнь", "на", "Марсе"];

var arrLength = arr.map(function (item) {
    return item.length;
});

console.log(arrLength); //[ 4, 5, 2, 5 ]

/* Напишите функцию getSums(arr), которая возвращает массив его частичных сумм.
*Иначе говоря, вызов getSums(arr) должен возвращать новый массив из такого же числа элементов, в котором на каждой позиции должна быть сумма элементов arr до этой позиции включительно. 
*/

function getSums(arr) {
    var result = [];
    if (!arr.length) return result;
  
    arr.reduce(function(sum, item) {
      result.push(sum);
      return sum + item;
    });
    return result;
}

console.log(getSums(arr)); //[ 1, 3, 6, 10 ]

///

var arr = ["Есть", "жизнь", "на", "Марсе"];

var newArr = arr.map (function(item){
    return item.length
});

console.log(newArr);

// Fibbonachi 

function fib(n) {

    if (n == 1 || n == 0) {
        return 1;
    }
    else {
        return n = fib(n - 2) + fib(n - 1);

    }
}

console.log(fib(8));// 34

function fib(n) {
    var a =0;

    if(n ==1 || n == 0 ){
    return a = 1;
}
    else {
        for (let i = 2; i<=n; i++) {
           a = fib(i-2) + fib(i-1);
        }return a;
    }
}

console.log(fib(8));

// sumTo (n)


function sumTo (n) {
    if (n==1){
       return n;
    } else {
        return n + sumTo(n-1);
    }
}

console.log(sumTo(6));



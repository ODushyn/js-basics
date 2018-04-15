/**
 * Создайте пустой объект user.
 * Добавьте свойство name со значением Вася.
 * Добавьте свойство surname со значением Петров.
 * Поменяйте значение name на Сергей.
 * Удалите свойство name из объекта.
 */

let obj = {
    name: "Вася",
    surname: "Петров",
};

function basicFunc() {
 obj.name = "Сергей";
 delete obj.name;
 return obj;
}

console.log(basicFunc(obj));

/**
 * Write function that:
 * take: object that looks like var salaries = { "Vasya": 100, "Petya": 300, "Dasha": 250 };
 * return: person with the biggest salary `Dasha: 250`
 */

function biggestSalary(salaries) {
    let max = 0;

    for (let key in salaries) {
        if (max < salaries[key]) {
            max = salaries[key];
        }
    }
    return max;
}
let salaries = {
    "Vasya": 100,
    "Petya": 300,
    "Dasha": 250,
};

biggestSalary(salaries);
console.log(biggestSalary(salaries));

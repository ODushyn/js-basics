/*
	Write function that
		take: string
    return: new string capitalize first letter and put last one in lower case.
*/

module.exports = function capFirstLowLast(str) {
	'use strict';
	let firstChar = str[0];
	let firstCharUpper = firstChar.toUpperCase();

	let lastChar = str[str.length - 1];
	let lastCharLower = lastChar.toLowerCase();

	let middleChars = str.slice(1, str.length - 1);

	return firstCharUpper + middleChars + lastCharLower;

};

function capFirstLowLast(str) {
	'use strict';
	let firstChar = str[0];
	let firstCharUpper = firstChar.toUpperCase();

	let lastChar = str[str.length - 1];
	let lastCharLower = lastChar.toLowerCase();

	let middleChars = str.slice(1, str.length - 1);

	return firstCharUpper + middleChars + lastCharLower;

}

console.log(capFirstLowLast('VovA'));
console.log(capFirstLowLast('vova'));
console.log(capFirstLowLast('VOVA'));
console.log(capFirstLowLast('vOVA'));
console.log(capFirstLowLast('VOVa'));
/*
	Write function that
		take: string
    return: new string capitalize first letter and put last one in lower case.
*/

module.exports = function capFirstLowLast(str) {
	'use strict';
	let firstCharUpper = str[0].toUpperCase();
	let lastCharLower = str[str.length - 1].toLowerCase();

	let middleChars = str.slice(1, str.length - 1);

	return firstCharUpper + middleChars + lastCharLower;

};

function capFirstLowLast(str) {
	'use strict';
	let firstCharUpper = str[0].toUpperCase();
	let lastCharLower = str[str.length - 1].toLowerCase();

	let middleChars = str.slice(1, str.length - 1);

	return firstCharUpper + middleChars + lastCharLower;

}

console.log(capFirstLowLast('VovA'));
console.log(capFirstLowLast('vova'));
console.log(capFirstLowLast('VOVA'));
console.log(capFirstLowLast('vOVA'));
console.log(capFirstLowLast('VOVa'));
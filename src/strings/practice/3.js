/*
	Write function that
		take: string and maxlength: number
    return: str if maxLength >= str length, str with length equal to maxLength and substitute last letter with `...` in the end.
  Example: truncate('Hello World', 15) => 'Hello World', truncate('Hello World', 5) => 'Hell...'
*/

module.exports = function truncate(str, maxLength) {
	'use strict';
	let strLength = str.length;
	let strNew = str.slice(0, maxLength-1);

	if (maxLength >= strLength) {
		return str;
	}
	return strNew + "...";
	
}

function truncate(str, maxLength) {
	let strLength = str.length;
	let strNew = str.slice(0, maxLength-1);

	if (maxLength >= strLength) {
		return str;
	}
	return strNew + "...";
}

console.log(truncate('Hello World', 5));
console.log(truncate('Hello World', 10));

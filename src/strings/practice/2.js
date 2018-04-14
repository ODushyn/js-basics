/*
	Write function that
		take: string
    return: true if string contains: apple or pear, false - otherwise
*/

module.exports = function checkFruits(str) {
	'use strict';
	let strLower = str.toLowerCase();
	let indexApple = strLower.indexOf('apple');
	let indexPear = strLower.indexOf('pear');

	if (indexApple > -1) {
		return true;
	} else if (indexPear > -1) {
		return true;
	}
	return false;
};

function checkFruits(str) {
	'use strict';

	let strLower = str.toLowerCase();
	let indexApple = strLower.indexOf('apple');
	let indexPear = strLower.indexOf('pear');

	if (indexApple > -1) {
		return true;
	} else if (indexPear > -1) {
		return true;
	}
	return false;

}

console.log(checkFruits('Ab3dD'));
console.log(checkFruits('Pear and banana'));
console.log(checkFruits('pear and Apple'));
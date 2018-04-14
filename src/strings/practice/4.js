/*
	Write function `getCurrency` that
		take: string
    return: number
  Example: `120$` -> `120`, `320E' -> `320`
*/

module.exports = function getCurrency(currencyStr) {
	'use strict';
	return + currencyStr.slice(0, currencyStr.length-1);	
}

function getCurrency (str) {
	'use strict';
   return Number(str.slice(0, str.length-1));	
}


console.log(getCurrency('120$'));
const MORSE_TABLE = {
	'.-': 'a',
	'-...': 'b',
	'-.-.': 'c',
	'-..': 'd',
	'.': 'e',
	'..-.': 'f',
	'--.': 'g',
	'....': 'h',
	'..': 'i',
	'.---': 'j',
	'-.-': 'k',
	'.-..': 'l',
	'--': 'm',
	'-.': 'n',
	'---': 'o',
	'.--.': 'p',
	'--.-': 'q',
	'.-.': 'r',
	'...': 's',
	'-': 't',
	'..-': 'u',
	'...-': 'v',
	'.--': 'w',
	'-..-': 'x',
	'-.--': 'y',
	'--..': 'z',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9',
	'-----': '0',
};

function decode(expr) {
	let resultStr = '',
		morseStr = '';

		for (let i = 0; i < expr.length - 9; i += 10) {
			let str = expr.slice(i, i+10);
			if (str === '**********') resultStr += ' ';
			else {
				for (let j = 0; j < str.length; j +=2) {
					if (str.slice(j, j+2) === '10') morseStr += '.';
					else if (str.slice(j, j+2) === '11') morseStr += '-';
				}

				resultStr += MORSE_TABLE[morseStr];
				morseStr = '';
			}
		}
	return resultStr;
}

module.exports = {
	decode
}
function add (num1, num2) {
	return num1 + num2
}

function subtract (num1, num2) {
	return num1 - num2
}

function sum (num) {
	let total = num.reduce((total, num) => {
		return total + num;
	},0);
	// let total = 0;
	// for (i = 0; i < num.length; i++){
	// 	total += num[i];
	// }
	return total;
}

function multiply (num) {
	if (num.length != 0){
		let product = num.reduce((product, num) => {
			return product * num;
		});
		return product;
	}
}

function power(num, power) {
	return num ** power;
}

function factorial(num) {
	let product = 1;
	while (num > 0){
		product *= num;
		num--
	}
	return product;	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
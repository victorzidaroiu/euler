/*

Smallest multiple
Problem 5
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

*/

module.exports = (args) => {
	let n = args[0] || 20;
	let number = 1;

	while(true) {
		if (isDivisible(number))
			break;
		number += 1;
	}

	function isDivisible(numberToCheck) {
		for(let i = 1; i <= n; i += 1) {
			if (numberToCheck % i !== 0)
				return false;
		}

		return true;
	}

	console.log(`The smallest positive number that is evenly divisible by all of the numbers from 1 to ${n} is ${number}`);

	return number;
}

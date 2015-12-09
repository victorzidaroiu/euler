/*

 Sum square difference
 Problem 6
 The sum of the squares of the first ten natural numbers is,

 12 + 22 + ... + 102 = 385
 The square of the sum of the first ten natural numbers is,

 (1 + 2 + ... + 10)2 = 552 = 3025
 Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

 Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

 */

module.exports = (args) => {
	let n = args[0] || 100;
	let sumOfSquares = 0;
	let sumSquared = 0;
	let sumDifference;
	let i;

	for(i = 1; i <= n; i++)
		sumOfSquares += Math.pow(i, 2);

	for(i = 1; i <= n; i++)
		sumSquared += i;

	sumSquared = Math.pow(sumSquared, 2);

	sumDifference = sumSquared - sumOfSquares;

	console.log(`The difference between the sum of the squares of the first ${n} natural numbers and the square of the sum is ${sumDifference}.`);

	return sumDifference;
}

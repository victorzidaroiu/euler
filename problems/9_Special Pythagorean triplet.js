/*

 Special Pythagorean triplet
 Problem 9
 A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

 a2 + b2 = c2
 For example, 32 + 42 = 9 + 16 = 25 = 52.

 There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 Find the product abc.

 */

module.exports = (args) => {
	let i, j, k, n = args[0];

	for (i = 1; i < n - 2; i += 1)
		for (j = 1; j < n - 1; j += 1)
			for (k = 1; k < n; k += 1)

}
/*

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?

*/

module.exports = (args) => {
	let n = args[0] || 10001;
	let primeCounter = 0;
	let i = 2;

	while(true) {
	    if (isPrime(i))
        	primeCounter += 1;

        if (primeCounter >= n)
            break;
        else
            i += 1;
	}

	function isPrime(value) {
        for(let i = 2; i < value; i += 1) {
            if(value % i === 0) {
                return false;
            }
        }
        return value > 1;
    }

    console.log(`The ${n} prime number is ${i}`);

    return i;
}
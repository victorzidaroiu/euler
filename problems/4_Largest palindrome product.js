/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

module.exports = (args) => {
    if (String.prototype.reverse === undefined) {
        String.prototype.reverse = function () {
            return this.split("").reverse().join("");
        }
    }

    let maxPalindrome = 0;
    let n = args[0] || 3;

    for (let i = Math.pow(10, n) - 1; i > Math.pow(10, n - 1) - 1; i--)
        for (let j = Math.pow(10, n) - 1; j > Math.pow(10, n - 1) - 1; j--) {
            let product = i * j;
            if (isPalindrome(product) && product > maxPalindrome)
                maxPalindrome = product;
        }

    console.log(`The largest palindrome made from the product of two ${n}-digit number is ${maxPalindrome}`);

    function isPalindrome(n) {
        if (typeof n !== 'string')
            n = n.toString();

        return n === n.reverse();
    }

    return maxPalindrome;
}
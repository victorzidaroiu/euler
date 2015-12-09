/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
**/

module.exports = (args) => {
    let originalTarget = args[0] || 600851475143;
    let target = originalTarget;
    let i = 2;

    while(i < target) {
        while(target % i === 0) {
            (function(newtarget) {
                console.log(`${target} can be divided by ${i} which gives us  ${newtarget}`);
                target = newtarget;
            })(target / i)
        }
        i += 1;
    }
    console.log(`${target} is the biggest prime factor for ${originalTarget}`);

    return target;
}
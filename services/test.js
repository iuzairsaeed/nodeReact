let cstring = [];
for (let i = 1; i <= 100; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        cstring[i] = 'FizzBuzz';
    } else if (i % 3 === 0) {
        cstring[i] = 'Fizz';
    } else if (i % 5 === 0) {
        cstring[i] = 'Buzz';
    } else {
        cstring[i] = i;
    }
}
module.exports = {
    test: cstrings
    // res.send({ x: cstring });
};
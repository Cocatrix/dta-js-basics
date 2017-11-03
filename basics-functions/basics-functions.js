
function multiply(a, b) {
    console.log('Number of arguments : ', arguments.length)
    if (typeof a === 'number' && typeof b === 'number') {
        return a * b;
    }
    else {
        throw new Error('One of the arguments is not a number')
    }
}

c = multiply(3,10)
console.log('a x b = ', c)

try {
    c = multiply(2,'word',9)
    console.log('a x b = ', c)
} catch (e) {
    console.log(e)
}

(function () {
    console.log('Self-invoked');
})();


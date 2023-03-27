/** Function that returns true if the values are either equal in value or property */

function deepEqual(value1, value2) {
    if (value1 === value2) {
        return 'False';
    }
    else {
        return 'True';
    }
}

console.log(deepEqual(4, 5));
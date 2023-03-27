/*Recursive Functions**/

/*Testing to see if entered value is even or odd**/

function evenoddTest(value) {
    if (value == 1) {
        return 'Odd Value';
    }
    else if (value == 0) {
        return 'Even Value';
    }
    else {
        return evenoddTest(value - 2);
    }
}

console.log(evenoddTest(98));

/**Doesn't work for negative's so I made another ↓ **/

function evenoddTest1(value) {
    if (value == 1) {
        return 'Odd Value';
    }
    else if (value == 0) {
        return 'Even Value';
    }
    else if (value > 1) {
        return evenoddTest1(value - 2);
    }

    else {
        return evenoddTest1(value + 2);
    }
}

console.log(evenoddTest1(-9387));


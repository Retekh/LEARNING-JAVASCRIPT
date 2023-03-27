/* Function that gives sum of an array of numbers**/

function sum(...numbers) {
    let result = 0
    for(let number of numbers) {
        result += number;
    }
    return result;
}

console.log(sum(5, 6, 1, 9, -79));

/* Function that gives sum of the numbers between two given numbers**/

function Range(min, max) {
    let list = [];
    let i = 0;
    for(let counter = min; counter <= max; counter++) {
        list[i] = counter; 
        i++;
    }
    let result2 = 0
    for(let listNu of list) {
        result2 += listNu;
    }
    return result2;
}

console.log(Range(-1, 3));

/* Same as Range function but with an optional third argument that indicates the "step" value used when building the array **/

function Range2(min, max, step) {
        
   
    if (step == undefined) {
        var step = 1;
    }

    let list = [];
    let i = 0;
    for(let counter = min; counter <= max; counter += step) {
        list[i] = counter; 
        i++;
    }

    let result2 = 0
    for(let listNu of list) {
        result2 += listNu;
    }
    return result2;
}

console.log(Range2(1, 10, 2));
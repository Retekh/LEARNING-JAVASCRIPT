/* Function that makes a list from an array**/

function arrayToList([...list1]) {
    
    let list = {value: X, rest: list};
    let i = 0;
    for (let node = list; node; node = node.rest) {
        let X = list1[i];
        i++;
    }
    return list;
}

console.log(arrayToList("cats", "dogs", "monkeys"));

/** Function that makes an array from a list */

let list2 = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
}
/**Unfinished?? */
console.log(list2.value);
console.log(list2.rest.value);
console.log(list2.rest.rest.value);

function listToArray(list) {
    let newArray = [];
    let i = 0;
    for (let number of list) {
        newArray[i] =+ number;
        i++;
    }
    return newArray;
}

console.log(listToArray(list2));
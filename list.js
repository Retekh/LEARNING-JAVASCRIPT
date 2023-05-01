/** Array to list */

const crypto = ['BTC', 'DODGE', 'ETH', 'AAVE', 'BNB']

function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = {value: array[i], rest: list}
    }
    return list;
}

console.log(arrayToList(crypto));

/** List to array */

const breakfast = ['juice', 'donuts', 'coffee', 'baguette']

function listToArray(list) {
    let array = []
    for (let node = list; node; node = node.rest) {
        array.push(node.value); 
    }
    return array;
}

console.log(listToArray(arrayToList(crypto)));

/** Adding elements to end 'nth' of list */


const newList = {value: 'ice cream', rest: {valie: 'lolipop', rest: {value: 'pizza', rest: null}}}

function prepend(element) {
    for (let node = newList; node; node.rest)
    if (node.rest = null) {
    node.rest = element;
    } else {}
    
    return newList;
}

console.log(prepend('orange'));

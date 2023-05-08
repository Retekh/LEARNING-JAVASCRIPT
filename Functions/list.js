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

/** HTML <li> type of list */

let crypto = ['BNB', 'DRIP', 'TATE']

function tickersToList(tickers, isOrdered) {
    let result = isOrdered ? '<ol>' : '<ul>';
    if (!Array.isArray(tickers)) {
        return '';
    } else {
    for (let cryptos in crypto) {
        result += `<li>${crypto[cryptos]}</li>`;
    }
    result += isOrdered ? '</ol>' : '</ul>';
    return result;
}
}

console.log(tickersToList(crypto, false));

/**Alternative method */
function tickersToList2(tickers, isOrdered) {
    let listItems = [];
    if(!Array.isArray(tickers)) {
        return '';
    } 
    for (let cryptos of crypto) {
        listItems.push(`<li>${cryptos}</li>`)
    }
    return `
        ${isOrdered ? '<ol>' : '<ul>'}
        ${listItems.join('')}
        ${isOrdered ? '</ol>' : '</ul>'}
        `
}

console.log(tickersToList2(crypto));

/**Alternative method */

function tickersToList2(tickers, isOrdered) {
    let listItems = [];
    let listType = isOrdered ? 'o' : 'u';
      if(!Array.isArray(tickers)) {
          return '';
       } 
      for (let cryptos of crypto) {
           listItems.push(`<li>${cryptos}</li>`)
       }
      return `
           <${listType}l>${listItems.join('')}</${listType}l>
             `
    }

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

function listToArray(list) {
    let newArray = [];
    for (let node = list; node; node = node.rest) {
        newArray.push(node.value);
    }
    return newArray;
}

console.log(listToArray(list2));
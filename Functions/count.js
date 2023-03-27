/* How many uppercase "B's in a String **/

function countBs(String) {
    var numberofBs = 0;
    for(let counter = 0; counter <= String.length; counter++) {
        if (String[counter] == 'B') {
            
            numberofBs++;
        }
    }
    if (numberofBs == 1) {
        return `There is ${numberofBs} Capital B in ${String}`
    }
    else {
    return `There are ${numberofBs} Capital B's in ${String}`
    }
}

console.log(countBs('BABOONS'));


/* How many of any letter (upper or lowercase) in a String **/

function countChar(String, Letter) {
    var numberofLetter = 0;
    for(let counter = 0; counter <= String.length; counter++) {
        if (String[counter] == Letter) {
            
            numberofLetter++;
        }
    }
    if (numberofLetter == 1) {
        if (Letter.toUpperCase() == Letter) {
            return `There is ${numberofLetter} Capital ${Letter} in ${String}`
        }
        else {
            return `There is ${numberofLetter} Lowercase ${Letter} in ${String}`
        }
    }
    else {
        if (Letter.toUpperCase() == Letter) {
          return `There are ${numberofLetter} Capital ${Letter}'s in ${String}`  
        }
        else {
            return `There are ${numberofLetter} Lowercase ${Letter}'s in ${String}`
        }
    
    }
}

console.log(countChar('Onomatopoeia', 'o'));
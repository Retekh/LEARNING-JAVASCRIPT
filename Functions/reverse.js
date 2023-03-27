/** Function that reverses an array without using the standard reverse method*/

function reverseArray(...array) {
    let newArray = [];
    let end = array.length - 1;
    let i = 0;

    for (let counter = end; counter >= 0; counter--) {
        newArray[i] = array[counter];
        i++;
    }
    return newArray;
}

console.log(reverseArray(2, 3, 4, 9, 10, "cat", 5, 10, "pancakes"));
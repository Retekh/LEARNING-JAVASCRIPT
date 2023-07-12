/*
Write a Javascript program to replace every
character in a given string with the character
following it in the alphabet
*/

let convertString = (str) => str
    .split('')
    .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
    .join('');

console.log(convertString('Retekh'))
console.log(convertString('abc'))

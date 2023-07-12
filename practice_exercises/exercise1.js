/* 
Write a Javascript program to check two numbers
and return true if one of the numbers are 100
or if the sum of the two numbers is 100
*/

const isEqual100 = (a,b) => a === 100 || b === 100 || (a + b) === 100;

console.log(isEqual100(50, 50))
console.log(isEqual100(100, 50))
console.log(isEqual100(5, 50))

/*
Write a Javascript program
to get the extension of a filename.
*/

const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));

console.log(getFileExtension('exercise2.js'));
console.log(getFileExtension('webpack.config.js'));

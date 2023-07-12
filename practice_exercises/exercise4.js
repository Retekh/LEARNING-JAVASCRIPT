/*
Write a Javascript program to get the current
date.
Expected Output:
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, mm/dd/yyyy  
*/

const formatDate = (date = new Date()) => {
 
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate();

    return month + '/' + day + '/' + year;
}

console.log(formatDate())

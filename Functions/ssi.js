/** Sequence, Selection, Iteration */

/** Structure starts with input. In this case a prompt. */

const personAge = prompt('Enter your age: ');

/** Input is taken and selections are made. */

function age(Age) {

    if (Age >= 18) {
        alert('Enjoy your game!');
    }
    else if (Age < 18) {
        alert('You must be 18 or older to play this game!');
    }

    else {
       let personAge = prompt('Enter your age: ');
       console.log(age(personAge));
    }

}

/** Output's the function personAge. */

console.log(age(personAge));


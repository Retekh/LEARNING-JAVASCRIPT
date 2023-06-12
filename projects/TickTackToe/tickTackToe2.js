let gameBoard = new Array(9).fill(null);
let playerTurn = 'X';

const $cellList = document.querySelectorAll('.js-cell');
const $jswinner = document.querySelector('.js-winner');
const $playerTurn = document.querySelector('.playerTurn');
$playerTurn.innerText = `Player turn: X\n\n`;
function clickHandler(event) {
    let boardIndex = event.target.dataset.index;
    if(gameBoard[boardIndex] === null) {
    gameBoard[boardIndex] = playerTurn;
    event.target.innerText = playerTurn;
    if(hasPlayerWon(playerTurn, gameBoard)) {
        $jswinner.innerText = `\nPlayer ${playerTurn} has won!`;
    }
    else if(gameBoard.every((element) => element !== null)) {
        $jswinner.innerHTML = "Draw. Game over!";
    }
    else {
        playerTurn = playerTurn === "X" ? "O" : "X";
        $playerTurn.innerText = `Player turn: ${playerTurn}\n\n`;
    }
    }
   
    
}

for(let $cell of $cellList) {
    $cell.addEventListener('click', clickHandler);
    console.log($cell);
}

function hasPlayerWon(playerTurn, gameBoard) {
    let winnerCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [3, 5, 7]
];

for(let [i1, i2, i3] of winnerCombos) {
    if(gameBoard[i1] === playerTurn &&
       gameBoard[i1] === gameBoard[i2] &&
       gameBoard[i1] === gameBoard[i3]) {
        return true;
       }
       
}
return false;
};


function GameBoardDisplay (gameBoard) { 

    let gameBoardDisplay = '';
    
    for (let slot in gameBoard) {
        if(slot == 2 || slot == 5) {
    gameBoardDisplay += gameBoard[slot] + '\n';
    }
    else {
        gameBoardDisplay += gameBoard[slot];
    }
    }
    return gameBoardDisplay;
}




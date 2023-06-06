let gameBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let playerTurn = 'O';
function whosMoveIsIt () {
    if(playerTurn == 'X') {
        return 'O';
    } else {
        return 'X';
    }

}



function makeAMove() {
    
   do {
            let lastMove = prompt(`Make a move ${whosMoveIsIt()}: \n${GameBoardDisplay(gameBoard)} `);
            gameBoard.splice(lastMove - 1, 1, whosMoveIsIt());
            playerTurn = whosMoveIsIt();
        } while (!hasPlayerWon(playerTurn, gameBoard))

        if(hasPlayerWon(playerTurn, gameBoard)) {
            return gameOver();
        }
};



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


function gameOver() {
        alert(`Player ${playerTurn} has won!`);
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
console.log(makeAMove());

let boardToHTML = GameBoardDisplay(gameBoard);
boardToHTML = boardToHTML.replace(/\n/g, "<br><br>");
boardToHTML = boardToHTML.replace(/X/g, "X &nbsp;&nbsp;");
boardToHTML = boardToHTML.replace(/O/g, "O &nbsp;&nbsp;");
boardToHTML = boardToHTML.replace(/-/g, "— &nbsp;&nbsp;");
boardToHTML = boardToHTML.replace(/\d/g, "— &nbsp;&nbsp;");
document.querySelector('h1').innerHTML = 'Tick Tack Toe Game!';
document.querySelector('p').innerHTML = `\n ${boardToHTML}`
console.log(GameBoardDisplay(gameBoard));
let gameBoard = [null, null, null, null, null, null, null, null]
let playerTurn = 'X';
function whosMoveIsIt () {
    if(playerTurn == 'X') {
        return 'O';
    } else {
        return 'X';
    }

}

function makeAMove() {
    
   do {
        } while (!playerHasWon) {
            let lastMove = prompt(`Make a move ${playerTurn}: `);
            push.gameBoard(playerTurn[lastMove - 1]);
            let playerTurn = whosMoveIsIt();
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
    if(winnerCombos[i1] === playerTurn &&
       winnerCombos[i1] === winnerCombos[i2] &&
       winnerCombos[i1] === winnerCombos[i3]) {
        return true;
       }
       return false;
}

};

function gameOver() {
    if(hasPlayerWon) {
        return `Player ${playerTurn} has won!`;
    }
};

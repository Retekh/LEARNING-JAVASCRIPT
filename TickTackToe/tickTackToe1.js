//**First Attepmt at making a Tick Tack Toe game. */

let playerArrayX = [];
let playerArrayO = [];
function enterValue2() {
    let lastNumberPlayed = null;
    let player = 'X';
    alert('TickTackToe Game!');
    alert('Controls:\n____________________________________________________\n\nType in the number that corresponds with the slot you want to move to.\n—(1)  —(2)  —(3)\n—(4)  —(5)  —(6)\n—(7)  —(8)  —(9)');
    for(let turn = 0; turn <= 9; turn++) {

        /** Starts by looking to see if anyone has won yet.*/

        if (playerArrayX.includes('1') && playerArrayX.includes('2') && playerArrayX.includes('3')) {
            return alert(`Player X wins!\n____________________________________________________\n\n${tickTackToeBoard()}`);
        }
        else if (playerArrayX.includes('4') && playerArrayX.includes('5') && playerArrayX.includes('6')) {
                return alert(`Player X wins!\n____________________________________________________\n\n${tickTackToeBoard()}`);
            }
        else if (playerArrayX.includes('7') && playerArrayX.includes('8') && playerArrayX.includes('9')) {
                return alert(`Player X wins!\n____________________________________________________\n\n${tickTackToeBoard()}`);
            }
        else if (playerArrayX.includes('1') && playerArrayX.includes('4') && playerArrayX.includes('7')) {
                return alert(`Player X wins!\n____________________________________________________\n\n${tickTackToeBoard()}`);
            }
        else if (playerArrayX.includes('2') && playerArrayX.includes('5') && playerArrayX.includes('8')) {
                return alert(`Player X wins!\n____________________________________________________\n\n${tickTackToeBoard()}`);
            }
        else if (playerArrayX.includes('3') && playerArrayX.includes('6') && playerArrayX.includes('9')) {
                return alert(`Player X wins!\n____________________________________________________\n\n${tickTackToeBoard()}`);
            }
        else if (playerArrayX.includes('1') && playerArrayX.includes('5') && playerArrayX.includes('9')) {
                return alert(`Player X wins!\n____________________________________________________\n\n${tickTackToeBoard()}`);
            }
        else if (playerArrayX.includes('3') && playerArrayX.includes('5') && playerArrayX.includes('7')) {
                return alert(`Player X wins!\n____________________________________________________\n\n${tickTackToeBoard()}`);
            }
        else if (playerArrayO.includes('1') && playerArrayO.includes('2') && playerArrayO.includes('3')){
                return alert(`Player O wins!\n____________________________________________________\n\n${tickTackToeBoard()}`);
            }
        else if (playerArrayO.includes('4') && playerArrayO.includes('5') && playerArrayO.includes('6')){
                return alert(`Player O wins!\n____________________________________________________\n\n${tickTackToeBoard()}`);
            }
        else if (playerArrayO.includes('7') && playerArrayO.includes('8') && playerArrayO.includes('9')){
                return alert(`Player O wins!\n____________________________________________________\n\n${tickTackToeBoard()}`);
            }
        else if (playerArrayO.includes('1') && playerArrayO.includes('4') && playerArrayO.includes('7')){
                return alert(`Player O wins!\n____________________________________________________\n\n${tickTackToeBoard()}`);
            }
        else if (playerArrayO.includes('2') && playerArrayO.includes('5') && playerArrayO.includes('8')){
                return alert(`Player O wins!\n____________________________________________________\n\n${tickTackToeBoard()}`);
            }
        else if (playerArrayO.includes('1') && playerArrayO.includes('5') && playerArrayO.includes('9')){
                return alert(`Player O wins!\n____________________________________________________\n\n${tickTackToeBoard()}`);
            }
        else if (playerArrayO.includes('3') && playerArrayO.includes('6') && playerArrayO.includes('9')){
                return alert(`Player O wins!\n____________________________________________________\n\n${tickTackToeBoard()}`);
            }
        else if (playerArrayO.includes('3') && playerArrayO.includes('5') && playerArrayO.includes('7')){
                return alert(`Player O wins!\n____________________________________________________\n\n${tickTackToeBoard()}`);
            }
        else if(turn == 9) {
            alert('Draw!');
        }

        else {
        /** If nobody has won yet it tells player who's turn it is and has them pick a number.
            Then it makes sure a number was picked. */

        let playerValue = prompt(`Player ${player}'s turn\n____________________________________________________\n\nEnter a number 1 through 9 for ${player}:\n${tickTackToeBoard()} `);
        if (playerValue == 'quit') {
            return alert('Play again soon!');
        }
        else if (playerValue == 'controls') {
            turn--
            alert('Controls:\n____________________________________________________\n\nType in the number that corresponds with the slot you want to move to.\n—(1)  —(2)  —(3)\n—(4)  —(5)  —(6)\n—(7)  —(8)  —(9)');
        }
        else if (playerValue == null || playerValue == NaN || playerValue == '') {
            turn-- 
            alert('You must enter a value between 1 and 9! Type \"quit\" to end game or "controls" for controls.');
        }
        else if (parseInt(playerValue) > 9 || parseInt(playerValue) < 1 || Number.isInteger(parseInt(playerValue)) == false) {
            console.log(playerArrayX);
            console.log(playerArrayO);
            turn--
            alert('You must enter a value between 1 and 9!');
        }

           else {
           /** Now it adds the players number to their own array. */

        if (turn % 2  == 0 && playerArrayO.includes(playerValue) == false) {
            playerArrayX.push(playerValue);
            player = 'O';
        }
        else if (turn % 2  == 0 && playerArrayO.includes(playerValue) == true){
            turn--
            alert('Choose another number! Player O already went there.');
        }
        else if (turn % 2  == 1 && playerArrayX.includes(playerValue) == false) {
            playerArrayO.push(playerValue);
            player = 'X';
        }
        else if (turn % 2  == 1 && playerArrayX.includes(playerValue) == true){
            turn--
            alert('Choose another number! Player O already went there.');
        }
        else {

            alert('You need to enter a number 1 through 9!');
        }
    }
}    
    }
}
console.log(enterValue2());

function tickTackToeBoard() {
    let boardArrayX = JSON.parse(JSON.stringify(playerArrayX));
    let boardArrayO = JSON.parse(JSON.stringify(playerArrayO));

    let board = ['—', '—', '—', '—', '—', '—', '—', '—', '—']
    for(let tick of boardArrayX) {
        if(tick == 2 || tick == 5) {  

          board.splice(tick - 1, 1, 'X');

          }
          else {
            
            board.splice(tick - 1, 1, 'X');
           
        }
    }
    for(let tack of boardArrayO) {
      if(tack == 2 || tack == 5) {
        
        board.splice(tack - 1, 1, 'O');
        
        }
        else {
            
          board.splice(tack - 1, 1, 'O');
        
          }
      
      }
    board.splice(3, 0, '\n');
    board.splice(7, 0, '\n');
    
    return board.join('');    
}
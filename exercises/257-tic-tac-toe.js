// Write a function "ticTacToe" which takes a two-dimensional array of size 3x3.
// Each cell in the two dimensional array can be one of 'O', 'X', or null.
// Return 'O' if O makes a winning row.
// Return 'X' if X makes a winning row.
// Return null if there is no winning row on the board.
//
// Examples:
// > ticTacToe([
//   ['O', 'O', 'O'],
//   ['X', null, 'X'],
//   [null, 'X', null]
//   ])
// 'O'
// > ticTacToe([
//   ['O', 'X', 'O'],
//   ['O', 'X', null],
//   [null, 'X', null]
//   ])
// 'X'
// > ticTacToe([
//   ['O', 'X', 'O'],
//   ['O', 'O', null],
//   [null, 'X', 'X']
//   ])
// null
function ticTacToe(array){
    let winner;
        if(array[0][0] === 'O' &&
           array[0][1] === 'O' &&
           array[0][2] === 'O'){
            winner = 'O';
        }
        else if(array[1][0] === 'O' &&
                array[1][1] === 'O' &&
                array[1][2] === 'O'){
            winner = 'O';
        }
        else if(array[2][0] === 'O' &&
                array[2][1] === 'O' &&
                array[2][2] === 'O'){
            winner = 'O';
        }
        else if(array[0][0] === 'O' &&
                array[1][0] === 'O' &&
                array[2][0] === 'O') {
            winner = 'O'
        }
        else if(array[0][1] === 'O' &&
                array[1][1] === 'O' &&
                array[2][1] === 'O') {
            winner = 'O'
        }
        else if(array[0][2] === 'O' &&
                array[1][2] === 'O' &&
                array[2][2] === 'O') {
            winner = 'O'
        }
        else if(array[0][0] === 'O' &&
                array[1][1] === 'O' &&
                array[2][2] === 'O') {
            winner = 'O'
        } 
        else if(array[0][2] === 'O' &&
                array[1][1] === 'O' &&
                array[2][0] === 'O') {
            winner = 'O'
        }
        else if(array[0][0] === 'X' &&
                array[0][1] === 'X' &&
                array[0][2] === 'X'){
            winner = 'X';
        }
        else if(array[1][0] === 'X' &&
                array[1][1] === 'X' &&
                array[1][2] === 'X'){
            winner = 'X';
        }
        else if(array[2][0] === 'X' &&
                array[2][1] === 'X' &&
                array[2][2] === 'X'){
            winner = 'X';
        }
        else if(array[0][0] === 'X' &&
                array[1][0] === 'X' &&
                array[2][0] === 'X') {
            winner = 'X'
        }
        else if(array[0][1] === 'X' &&
                array[1][1] === 'X' &&
                array[2][1] === 'X') {
            winner = 'X'
        }
        else if(array[0][2] === 'X' &&
                array[1][2] === 'X' &&
                array[2][2] === 'X') {
            winner = 'X'
        }
        else if(array[0][0] === 'X' &&
                array[1][1] === 'X' &&
                array[2][2] === 'X') {
            winner = 'X'
        } 
        else if(array[0][2] === 'X' &&
                array[1][1] === 'X' &&
                array[2][0] === 'X') {
            winner = 'X'
        }
        else {
            winner = null
                }
            return winner
            }
// Write a function "rockPaperScissors" which takes the throw of player 1 and
// the throw of player 2.
// A throw can have the values of 'rock', 'paper', or 'scissors'.
// It should return the winner: 'player 1', 'player 2', or 'draw'
// Examples:
// rockPaperScissors('rock', 'scissors') --> 'player 1'
// rockPaperScissors('rock', 'paper') --> 'player 2'
// rockPaperScissors('paper', 'paper') --> 'draw'
function rockPaperScissors(throw1, throw2){

    if (throw1 === throw2){
        return 'draw'
    }
    if (throw1 === 'rock' && throw2 === 'scissors' || throw1 === 'scissors' && throw2 === 'paper' || throw1 === 'paper' && throw2 === 'rock'){
        return 'player 1'
    }
    else {
        return 'player 2'
    }
    
}
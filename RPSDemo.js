//storing the values in the array for random choice of a computer
let choices = ['rock', 'paper', 'scissor'];


//create random computer choice function....
function computerChoice() {
    //return random choice
    return choices[Math.floor(Math.random() * choices.length)]
}


//create a var for taking user choice
let playerChoice = 'rock';

//assigning the computerChoice for a variable.
let computerSelection = computerChoice();

//create the playRound function which contains all the possibilities
function playRound(playerChoice, computerSelection) {
    if (playerChoice === 'rock' && computerSelection === 'paper') {
        return 'You lose paper covers rock'
    } else if (playerChoice === 'paper' && computerSelection === 'scissor') {
        return 'You lose scissor cuts paper'
    } else if (playerChoice === 'scissor' && computerSelection === 'rock') {
        return 'You lose rock crushes scissor'
    } else if (computerSelection === 'rock' && playerChoice === 'paper') {
        return 'You win paper covers rock'
    } else if (computerSelection === 'paper' && playerChoice === 'scissor') {
        return 'You win scissor cuts paper'
    } else if (computerSelection === 'scissor' && playerChoice === 'rock') {
        return ' You win rock crushes scissor'
    } else if (computerSelection === 'rock' && playerChoice === 'rock') {
        return 'You tied! , you both picked rock'
    } else if (computerSelection === 'paper' && playerChoice === 'paper') {
        return 'You tied! , you both picked paper'
    } else if (computerSelection === 'scissor' && playerChoice === 'scissor') {
        return 'You tied! , you both picked scissor'
    }
}

console.log(playRound(playerChoice, computerSelection));
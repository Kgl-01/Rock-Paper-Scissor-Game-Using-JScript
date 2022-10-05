let winners = [];
//create an array to save the each round result


//storing the values in the array for random choice of a computer
const choices = ['rock', 'paper', 'scissor'];


//create function random computer choice function....
function computerChoice() {
    //return random choice
    return choices[Math.floor(Math.random() * choices.length)]
}

function resetGame() {
    winners = [];
    document.querySelector('.playerScore').textContent = 'Player Score : 0';
    document.querySelector('.computerScore').textContent = 'Computer Score : 0';
    document.querySelector('.ties').textContent = 'Tied : 0';
    document.querySelector('.winner').textContent = '';
    document.querySelector('.playerChoice').textContent = '';
    document.querySelector('.computerChoice').textContent = '';
    document.querySelector('.choicesDisplay').innerHTML = '';
    document.querySelector('.reset').style.display = 'none';

}



//Function to start the game.
function startGame() {
    let imgs = document.querySelectorAll('img');

    imgs.forEach(img =>
        img.addEventListener('click', () => {
            if (img.id) {
                playRound(img.id);
            }
        }))
}


function playRound(playerChoice) {
    let wins = checkWins();
    if (wins >= 5) {
        return;
    }
    const computerInput = computerChoice();
    const winner = checkWinner(playerChoice, computerInput);
    winners.push(winner);
    scoreCounter();
    wins = checkWins();
    if (wins == 5) {
        endGame();
    }
    document.querySelector('.choicesDisplay').innerHTML = `Your picked ${playerChoice}, computer picked ${computerChoice()}`;
}


function endGame() {
    let playerWins = winners.filter((item) => item == 'Player').length;
    if (playerWins == 5) {
        document.querySelector('.winner').textContent = 'Congrats you win !!!';
    } else {
        document.querySelector('.winner').textContent = 'You lose, computer Wins';
    }
    document.querySelector('.reset').style.display = 'flex';
}



function displayRound(playerChoice, computerChoice, winner) {
    document.querySelector('.playerChoice').textContent = `You chose : ${playerChoice.charAt(0).toUpperCase+playerChoice.slice(1)}`;
    document.querySelector('.computerChoice').textContent = `The computer chose : ${computerChoice.charAt(0).toUpperCase+computerChoice.slice(1)}`;
    document.querySelector('.winner').textContent = `Round Winner : ${winner}`;
}





function scoreCounter() {
    const pWinCount = winners.filter((item) => item == 'Player').length;
    const cWinCount = winners.filter((item) => item == 'Computer').length;
    const ties = winners.filter((item) => item == 'Tie').length;

    document.querySelector('.playerScore').textContent = `Player Score : ${pWinCount} `;
    document.querySelector('.computerScore').textContent = `Computer Score : ${cWinCount} `;
    document.querySelector('.ties').textContent = `Tied : ${cWinCount} `;
}




//create the playRound function which contains all the possibilities
function checkWinner(choice1, choice2) {
    if ((choice1 == 'rock' && choice2 == 'scissor') ||
        (choice1 == 'scissor' && choice2 == 'paper') ||
        (choice1 == 'paper' && choice2 == 'rock')) {
        return 'Player';
    } else if (choice1 == choice2) {
        return 'Tie';
    } else {
        return 'Computer';
    }

}



function checkWins() {
    const pWinCount = winners.filter((item) => item == 'Player').length;
    const cWinCount = winners.filter((item) => item == 'Computer').length;

    return Math.max(pWinCount, cWinCount);
}

function setWins() {
    const pWinCount = winners.filter((item) => item == 'Player').length;
    const cWinCount = winners.filter((item) => item == 'Computer').length;
    const ties = winners.filter((item) => item == 'Tie').length;
}


document.querySelector('.playerScore').style.color = 'yellow';
document.querySelector('.computerScore').style.color = 'yellow';
document.querySelector('.gName').style.color = '#00ff21';
document.querySelector('.ties').style.color = '#00ff21';

document.querySelector('#rock').style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
document.querySelector('#paper').style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
document.querySelector('#scissor').style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
document.querySelector('.winner').style.color = '#00ff21';
document.querySelector('.choicesDisplay').style.color = 'yellow';
startGame();
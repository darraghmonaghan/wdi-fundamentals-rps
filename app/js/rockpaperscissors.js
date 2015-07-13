

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}


function getWinner(playerMove,computerMove) {
    var winner;
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
    if (playerMove === 'rock' && computerMove === 'scissors') {
        winner = 'player';
    } else if (playerMove === 'paper' && computerMove === 'rock') {
        winner = 'player';
        console.log(computerMove);
    } else if (playerMove === 'scissors' && computerMove === 'paper') {
        winner = 'player';
        console.log(computerMove);
    } else if (playerMove === 'rock' && computerMove === 'paper') {
        winner = 'computer';
        console.log(computerMove);
    } else if (playerMove === 'paper' && computerMove === 'scissors') {
        winner = 'computer';
        console.log(computerMove);
    } else if (playerMove === 'scissors' && computerMove === 'rock') {
        winner = 'computer';
        console.log(computerMove);
    } else {
        winner = 'tie';
        console.log(computerMove);
    }
    return winner;
}



// function playToFive() {
//     console.log("Let's play Rock, Paper, Scissors");
//     var playerWins = 0;
//     var computerWins = 0;
//     // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
//     /* YOUR CODE HERE */
//     while (playerWins < 5 || computerWins < 5) {
//         getWinner();
//             if (winner === 'player') {
//                 playerWins += 1;
//             } else if (winner === 'computer') {
//                 computerWins += 1;
//             } else {
//             }
//     } 
//         console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
//         console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
//     return [playerWins, computerWins];
// }


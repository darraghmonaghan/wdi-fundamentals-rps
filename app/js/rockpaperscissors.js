

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
        return (winner = 'player');
    } else if (playerMove === 'paper' && computerMove === 'rock') {
        return (winner = 'player');
    } else if (playerMove === 'scissors' && computerMove === 'paper') {
        return (winner = 'player');
    } else if (playerMove === 'rock' && computerMove === 'paper') {
        return (winner = 'computer');
    } else if (playerMove === 'paper' && computerMove === 'scissors') {
        return (winner = 'computer');
    } else if (playerMove === 'scissors' && computerMove === 'rock') {
        return (winner = 'computer');
    } else {
        return (winner = 'tie');
    }
    return winner;
}


function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
    var winner = getWinner(playerMove, computerMove);
    var gamesPlayed = 0; // number of gamesPlayed so far.
    while ((playerWins < 5) && (computerWins < 5)) {
            if (winner === 'player') {
                    playerWins += 1;
                    gamesPlayed += 1;
            } else if (winner === 'computer') {
                    computerWins += 1;
                    gamesPlayed += 1;
            }
            console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove + '. Winner was ' + winner + '.');
            console.log('The score is currently ' + playerWins + ' to ' + computerWins + '.');
            console.log(gamesPlayed + ' games played so far.');
        }
    }
}






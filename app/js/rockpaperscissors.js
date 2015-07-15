

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



function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var winner = getWinner();
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
    var gamesPlayed = 0; // number of gamesPlayed so far.
            // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
            /* YOUR CODE HERE */
    // while ((playerWins < 5) && (computerWins < 5)) {
    for (var i = 0; i <= 5; i++) {
        // getWinner(playerMove, computerMove);
            if (winner === 'player') {
                playerWins += 1;
                gamesPlayed += 1;
            } else (winner === 'computer') {
                computerWins += 1;
                gamesPlayed += 1;
            } 
    } 
        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove + '. Winner was ' + winner + '.');
        console.log('The score is currently ' + playerWins + ' to ' + computerWins + '.');
        console.log(gamesPlayed + ' games played so far.');
}


'use strict';

function getInput() {
    console.log("\nPlease choose either 'rock', 'paper', or 'scissors'.");
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


function getWinner(playerMove, computerMove) {
    var winner;
    // var playerMove = getPlayerMove();
    // var computerMove = getComputerMove();
    if (playerMove === 'rock' && computerMove === 'scissors') {
        winner = 'player';
    } else if (playerMove === 'paper' && computerMove === 'rock') {
        winner = 'player';
    } else if (playerMove === 'scissors' && computerMove === 'paper') {
        winner = 'player';
    } else if (playerMove === 'rock' && computerMove === 'paper') {
        winner = 'computer';
    } else if (playerMove === 'paper' && computerMove === 'scissors') {
        winner = 'computer';
    } else if (playerMove === 'scissors' && computerMove === 'rock') {
        winner = 'computer';
    } else {
        winner = 'tie';
    }
    return winner;
}


function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins < 5 && computerWins < 5) {
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
    var result = getWinner(playerMove, computerMove);

            if (result === 'player') {
                playerWins++;
                console.log('\nPlayer Wins');
            } 
            else if (result === 'computer') {
                computerWins++;
                console.log('\nComputer Wins');
            } 
            else {
                console.log('\nTied Game');
            }
            console.log('Player chose ' + playerMove + ', Computer chose ' + computerMove + '. Winner is: ' + result);
            console.log('Current score:' + playerWins + ':' + computerWins);
        }
return [playerWins, computerWins];
}

playToFive();
 








//Ethan Friedman last modified 4/28/15

////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

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
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

var roundNum = 1;

function getPlayerMove(move) {
	/*
	move = move || getInput();
	return move;
	*/
	
//better (I think) code to account for errors other than being blank
//.toLowerCase() lets you type in 'Rock' or 'PAPer' and still have it count
    
   while (move.toLowerCase() !== 'rock' && move.toLowerCase() !== 'scissors' && move.toLowerCase() !== 'paper') {
   move = getInput();
   }
   return move;
}

function getComputerMove(move) {
	/*
	move = move || randomPlay();
	return move;
    
    Below is more robust code that allows for errors (i.e., nonblank values of 'move' that don't correspond to Rock, Paper, or Scissors*/
    
    while (move !== 'rock' && move !== 'scissors' && move !== 'paper') {
   move = randomPlay();
   }
   return move;
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === computerMove) {
	    winner = 'tie';
	    } else if ((playerMove === 'rock' && computerMove === 'scissors') || (playerMove === 'scissors' && computerMove === 'paper') || (playerMove === 'paper' && computerMove === 'rock')) {
	    winner = 'player';
	    } else {
	    winner = 'computer';
	    }
	console.log("Round no. " + roundNum + ". Computer played " + computerMove + ". Winner: " + winner);
    return winner;
}

function playToX() {
    console.log("Let's play Rock, Paper, Scissors.");
    
    console.log("How many wins does one of us need for victory?");
    var gamesToVictory;
    while (isNaN(gamesToVictory) || gamesToVictory < 1) {
		gamesToVictory = Number(prompt());
	}
	
    var playerWins = 0;
    var computerWins = 0;
    
    while (playerWins < gamesToVictory && computerWins < gamesToVictory) {
	var theGame = getWinner(getPlayerMove(getInput()), getComputerMove(randomPlay()));
    
    switch(theGame) {
	    case 'player' :
	    playerWins++;
	    break;
	    
	    case 'computer' :
	    computerWins++;
	    break;
	    }
	roundNum++; 
	}
	
    if (playerWins > computerWins) {
	    console.log("You won! Thanks for playing.");
	    } else {
		    console.log("HAHAHAHA! I crushed you!");
		    } 
		    
    return [playerWins, computerWins, roundNum - (1 + playerWins + computerWins)];
}
	
playToX();


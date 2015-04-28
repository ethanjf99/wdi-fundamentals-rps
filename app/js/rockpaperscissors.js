//Ethan Friedman last modified 4/28/15

////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
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

function getPlayerMove(move) {
	move = move || getInput();
	return move;
	
    /*
    more robust code to account for errors
    
    var playerMove;
    if (move != 'rock' || move != 'paper' || move != 'scissors') {
	    playerMove = getInput();
	    } else {
		    playerMove = move;
		    }
    return playerMove;
    */
}

function getComputerMove(move) {
	move = move || randomPlay();
	return move;
   
    /* 
    This is more robust code that allows for errors (i.e., nonblank values of 'move' that don't correspond to Rock, Paper, or Scissors
    
    var computerMove;
     if (move != 'rock' || move != 'paper' || move != 'scissors') {    
	     computerMove = randomPlay();
	     } else {
		     computerMove = move;
		     }
	     return computerMove;
	 */
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === computerMove) {
	    winner = 'tie';
	    } else if ((playerMove = 'rock' && computerMove === 'scissors') || (playerMove === 'scissors' && computerMove === 'paper') || (playerMove === 'paper' && computerMove === 'rock')) {
	    winner = 'player';
	    } else {
	    winner = 'computer'
	    }
    return winner;
}

function playToX() {
    console.log("Let's play Rock, Paper, Scissors.");
    console.log("How many games are we playing to?");
    var gamesToVictory = Number(prompt());
    var playerWins = 0;
    var computerWins = 0;
    
	getWinner(getPlayerMove(getInput()), getComputerMove(randomPlay()));
    
    if (playerWins = gamesToVictory) {
	    console.log("You won! Thanks for playing.");
	    } else if (computerWins = gamesToVictory) {
		    console.log("HAHAHAHA! I crushed you!");
		    } else {
			    //code TK
			}
    return [playerWins, computerWins];
}

	
playToX();


// Global variables;

const rock = "rock";
const paper = "paper";
const scissors = "scissors";
let playerScore = 0;
let computerScore = 0;

// function randomly selects rock paper or scissors

function computerPlay () {
    randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        return rock;
    } else if (randomNum === 1) {
        return paper;
    } else if (randomNum === 2) {
        return scissors;
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == scissors) {
        playerScore++;
        return "Player wins the round";
    }   else if (playerSelection == "paper" && computerSelection == rock) {
        playerScore++;
        return "Player wins the round";
    }   else if (playerSelection == "scissors" && computerSelection == paper) {
        playerScore++; 
        return "Player wins the round";
    }   else if (playerSelection === computerSelection) {
        playerScore++;
        computerScore++
        return "TIE ROUND";
    }   else {
        computerScore++;
        return "Computer wins round"
    }
}


function game() {
    for (let i = 0; i < 5; i++) {
      const playerSelection = prompt("Choose either rock paper or scissors").toLowerCase();
      const computerSelection = computerPlay();
      const currentRound = playRound(playerSelection, computerSelection);
      console.log(currentRound);
      console.log(playerScore, computerScore);
    } if (playerScore > computerScore) {
        return "HUMAN HAS WON THE GAME";
    } else if (computerScore > playerScore) {
        return "ROBOT WINS THE GAME";
    } else {
        return "Game ends as a draw";
    }
}
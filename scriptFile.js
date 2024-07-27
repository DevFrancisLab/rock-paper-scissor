/*function calcComputerRandom() {
	return Math.floor(Math.random()*3);
}*/

function getComputerChoice() {
	let randomNumber = Math.floor(Math.random()*3);

	if (randomNumber == 0) {
		let rock = "rock";
		return rock;
	} else if (randomNumber == 1) {
		let paper = "paper";
		return paper;
	} else {
		let scissors = "scissors";
		return scissors;
	}
}

function getHumanChoice() {
	let choice = prompt("What's your chice?");
	return choice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
	if (humanChoice == "rock") {
	   if (computerChoice == "scissors") {
		   console.log("You win! Rock beats Scissors");
		   humanScore++;
		   console.log("You: " + humanScore);
	   } else if (computerChoice == "paper") {
		   console.log("You lose! Paper beats Rock");
		   computerScore++;
		   console.log("Computer: " + computerScore);
	   } else {
		   console.log("It's a draw!");
	   }
	} else if (humanChoice == "paper") {
		   if (computerChoice == "rock") {
			   console.log("You win! Paper beats Rock");
			   humanScore++;
			   console.log("You: " + humanScore);
		   } else if (computerChoice == "scissors") {
			   console.log("You lose! Scissors beats Paper");
			   computerScore++;
			   console.log("Computer: " + computerScore);
		   } else {
			   console.log("It's a draw!");
		   }
	} else if (humanChoice == "scissors") {
		   if (computerChoice == "paper") {
			   console.log("You win! Scissors beats Paper");
			   humanScore++;
			   console.log("You: " + humanScore);
		   } else if (computerChoice == "rock") {
			   console.log("You lose! Rock beats Scissors");
			   computerScore++;
			   console.log("Computer: " + computerScore);
		   } else {
		   console.log("It's a draw!");
		   }
	} else {
		console.log(`Invalid Choice! Please enter "rock", "paper" or "scissors"`);
	}
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

//playRound(humanSelection, computerSelection);

function playGame() {
	for (let counter = 0; counter < 5; counter++) {
	playRound(humanSelection, computerSelection);
	}

	console.log("Your New Score: " + humanScore);
	console.log("Computer New Score: " + computerScore);
}

playGame();

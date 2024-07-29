//Function to generate computer choice
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

//Function to 
function getHumanChoice() {

let choice =  prompt(`Welcome to Man vs Computer Competition.
	Let's see who is Superior... Select your choice:
	1.Rock  2.Paper  3.Scissors
	Enter your choice e.g Paper:`)
	return choice.toLowerCase();


}

let humanScore = 0;
let computerScore = 0;

//Function to play one round
function playRound(humanChoice, computerChoice) {
	if (humanChoice == "rock") {
	   if (computerChoice == "scissors") {
		   console.log("You win! Rock beats Scissors (Computer Loses)");
		   humanScore++;
		   console.log(`You: ${humanScore}   Computer: ${computerScore}`);
	   } else if (computerChoice == "paper") {
		   console.log("You lose! Paper beats Rock (Computer Wins)");
		   computerScore++;
		   console.log(`Computer: ${computerScore}   You: ${humanScore}`);
	   } else {
		   console.log("It's a draw! None is Added a Score!");
	   }
	} else if (humanChoice == "paper") {
		   if (computerChoice == "rock") {
			   console.log("You win! Paper beats Rock (Computer Loses)");
			   humanScore++;
			   console.log(`You:${humanScore}   Computer: ${computerScore}`);
		   } else if (computerChoice == "scissors") {
			   console.log("You lose! Scissors beats Paper (Computer Wins)");
			   computerScore++;
			   console.log(`Computer: ${computerScore}   You: ${humanScore}`);
		   } else {
			   console.log("It's a draw! None is Added a Score!");
		   }
	} else if (humanChoice == "scissors") {
		   if (computerChoice == "paper") {
			   console.log("You win! Scissors beats Paper (Computer Loses)");
			   humanScore++;
			   console.log(`You: ${humanScore}   Computer: ${computer}`);
		   } else if (computerChoice == "rock") {
			   console.log("You lose! Rock beats Scissors (Computer Wins");
			   computerScore++;
			   console.log(`Computer: ${computerScore}   You: ${humanScore}`);
		   } else {
		   console.log("It's a draw! None is Added a Scor!");
		   }
	} else {
		alert(`Invalid Choice! Please enter "rock", "paper" or "scissors"`);
		//playGame();
	}
}

//Function to play game five rounds
function playGame() {
	for(let i=0; i<5; i++) {
		const computerSelection = getComputerChoice();
		const humanSelection = getHumanChoice();
		console.log(playRound(humanSelection, computerSelection));
	}

	if (humanScore > computerScore) {
		alert(`Hurray! Congratulations! You've Won!
      You: ${humanScore}     Computer: ${computerScore}`);
	} else if (humanScore < computerScore) {
		alert(`Aw! You've Lost!
      You: ${humanScore}     Computer: ${computerScore}`);
	} else {
		alert(`Ok! It's a Draw!
      You: ${humanScore}     Computer: ${computerScore}`);
	}
}

playGame();

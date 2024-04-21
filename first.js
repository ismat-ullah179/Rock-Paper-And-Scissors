let userScore = 0;
let compScore = 0;

//step 1 to access all the choice class from html
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const showWinner = (userWin, userChoice, compChoice) => {
	if (userWin) {
		console.log("You win");
		userScore++;
		userScorePara.innerText = userScore;
		msg.innerText = "You Win"; 
		msg.style.backgroundColor = "green";
	} else {
		console.log("You lost");
		compScore++;
		compScorePara.innerText = compScore;
		msg.innerText = "You Lost!";
		msg.style.backgroundColor = "red";
	}
}

//step 4 to click from computer random click
const genCompChoice = () => {
	const options = ["rock", "paper", "scissor"];
	const randIdx = Math.floor(Math.random() * 3);
	return options[randIdx];
}


//step 3 to play the game to store user choice, as we already generate user choice/click
const playGame = (userChoice) => {
	console.log("user choice =", userChoice);
	//Generate comp choice now
	const compChoice = genCompChoice();
	console.log("computer choice =", compChoice);

	if (userChoice === compChoice) {
		console.log("GAME IS DRAWN");
		msg.innerText = "Game is Drawn";
		msg.style.backgroundColor = "blue";
	} else {
		let userWin = true;
		if (userChoice === "rock") {
			//scissor, paper
			userWin = compChoice === "paper" ? false : true;
		} else if (userChoice==="paper") {
			//rock, scissor
			userWin = compChoice === "scissor" ? false : true;
		} else {
			//rock, paper
			userWin = compChoice === "rock" ? false : true;
		}

		showWinner(userWin, userChoice, compChoice);
	}
}

//step 2 to listen the click from user and fetch id of clicked btn 
choices.forEach((choice) => {
	choice.addEventListener("click", () => {
		const userChoice = choice.getAttribute("id");
		playGame(userChoice);
	});
});

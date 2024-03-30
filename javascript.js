const options = ["ROCK", "PAPER", "SCISSORS"];

function getComputerChoice () {
    let random = Math.floor(Math.random() * options.length);
    return options[random];
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie!";
    } else if ((playerSelection === "ROCK" && computerSelection === "SCISSORS") || (playerSelection === "PAPER" && computerSelection === "ROCK") || (playerSelection === "SCISSORS" && computerSelection === "PAPER")) {
        return "Player wins!";
    } else {
        return "Computer wins!";
    }
}

function playGame() {
    let computerScore = 0;
    let playerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerChoice = (prompt("Type your choice: ")).toUpperCase();
        let computerChoice = getComputerChoice();
        if (playRound(playerChoice, computerChoice) === "Player wins!") {
            playerScore++;
        } else if (playRound(playerChoice, computerChoice) === "Computer wins!") {
            computerScore++;
        }
    }
    if (playerScore > computerScore) {
        return "Player wins!";
    } else if (computerScore > playerScore) {
        return "Computer wins!";
    } else {
        return "Tie!";
    }
}

console.log(playGame());
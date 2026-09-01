function getComputerChoice() {
    let n = Math.random();
    if (n < 0.33) {
        return "rock";
    }
    if (n < 0.66) {
        return "paper";
    }
    return "scissors";
}

function getHumanChoice() {
    let choice = prompt("Rock, paper or scissors?");
    return (choice.toLowerCase());
}

function playGame() {
    
let humanScore = 0;
let computerScore = 0;

for (let i = 0; i < 5; i++) {
    playRound();
    console.log("Your score: " + humanScore + ". Computer score: " + computerScore)
}

if (humanScore === computerScore) {
    console.log("Game tie!");
    return;
} else if (humanScore > computerScore) {
    console.log("You won the game!");
    return;
} else {
    console.log("You lost the game!");
    return;
}

function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    
    if (humanChoice === computerChoice) {
        console.log("Tie!");
        return;
    }
    if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            console.log("You win! Rock beats scissors!");
            humanScore++;
            return;
        } else {
            console.log("You lose! paper beats rock!");
            computerScore++;
            return;
        }
    }
    if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You win! Paper beats rock!");
            humanScore++;
            return;
        }
        console.log("You lose! Scissors beat paper!");
        computerScore++;
        return;
    }
    if (computerChoice === "rock") {
        console.log("You lose! Rock beats scissors!");
        computerScore++;
        return;
    }
    console.log("You win! scissors beat paper!");
    humanScore++;
    return;
}

}

// playRound(humanChoice, computerChoice);
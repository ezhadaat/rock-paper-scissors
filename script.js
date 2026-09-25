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
    
let humanScore = 0;
let computerScore = 0;

function playRound(e) {
    const humanChoice = e.target.id;
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

const buttons = document.querySelectorAll("button");
console.log(buttons); //test

buttons.forEach(button => {
    button.addEventListener('click', playRound);
});
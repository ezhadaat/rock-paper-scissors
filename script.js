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
    
let humanScore = 0;
let computerScore = 0;

function playRound(e) {
    const humanChoice = e.target.id;
    const computerChoice = getComputerChoice();
    
    if (humanChoice === computerChoice) {
        result.textContent = "Tie!";
        return;
    }
    if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            result.textContent = "You win! Rock beats scissors!";
            changeScore(1);
            return;
        } else {
            result.textContent = "You lose! paper beats rock!";
            changeScore(0);
            return;
        }
    }
    if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            result.textContent = "You win! Paper beats rock!";
            changeScore(1);
            return;
        }
        result.textContent = "You lose! Scissors beat paper!";
        changeScore(0);
        return;
    }
    if (computerChoice === "rock") {
        result.textContent = "You lose! Rock beats scissors!";
        changeScore(0);
        return;
    }
    result.textContent = "You win! scissors beat paper!";
    changeScore(1);
    return;
}
const result = document.querySelector('#result');
const buttons = document.querySelectorAll("button");
const scoreCountHuman = document.querySelector('#humanScore');
const scoreCountComputer = document.querySelector('#computerScore');

buttons.forEach(button => {
    button.addEventListener('click', playRound);
});

function changeScore(win) {
    if(win) {
        scoreCountHuman.textContent = ++humanScore;
        if (humanScore === 5) {
            alert("You win!");
        } else {return}
    } else {
        scoreCountComputer.textContent = ++computerScore;
        if (computerScore === 5) {
            alert("Computer wins!");
        } else {return}
    }
    scoreCountComputer.textContent = (computerScore = 0);
    scoreCountHuman.textContent = (humanScore = 0);
}
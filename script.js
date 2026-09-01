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
    return prompt("Rock, paper or scissors?");
}



const choices = ["rock", "paper", "scissors"]

function getComputerChoice () {
    const choice = Math.floor(Math.random() * 3) + 1;
    if (choice == 1){
        return "rock"
    } else if (choice == 2){
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice () {
    return prompt("Enter Rock, Paper, or Scissors: ")
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i <5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection)
    }

    function playRound (humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase()

        if (humanChoice == "paper" && computerChoice == "rock"){
            console.log("You win! Paper beats rock!")
            humanScore += 1
        } else if (humanChoice == "rock" && computerChoice == "scissors"){
            console.log("You win! Rock beats scissors!")
            humanScore += 1
        } else if (humanChoice == "scissors" && computerChoice == "paper"){
            console.log("You win! Scissors beats paper!")
            humanScore += 1;
        } else if (humanChoice == "paper" && computerChoice == "scissors"){
            console.log("You lose! Scissors beats paper!")
            computerScore += 1
        } else if (humanChoice == "scissors" && computerChoice == "rock"){
            console.log("You lose! Rock beats scissors!")
            computerScore += 1
        } else if (humanChoice == "rock" && computerChoice == "paper"){
            console.log("You lose! Paper beats rock!")
            computerScore += 1
        } else {
            console.log("Tie!")
        }

    function determineWinner(){
        if (humanScore > computerScore){
            console.log("Human wins!")
        } else if (computerScore > humanScore){
            console.log("Computer wins!")
        } else {
            console.log("It's a tie!")
        }
    }
    determineWinner()
}
}
playGame()




const choices = ["rock", "paper", "scissors"]

const playButton = document.querySelector("#playButton")
const log = document.querySelector("#log"); 


let humanScore = 0;
let computerScore = 0;


function getComputerChoice () {
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function getHumanChoice () {
    
        let playerChoice = prompt("Type your choice:");

        if (playerChoice === null || playerChoice.trim() === "") {
            log.innerText = "Please, enter a choice!";
            return null;
        } return (playerChoice.toLowerCase() === "")          
    }
    



function playRound (humanChoice, computerChoice) {

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice(); 
console.log(computerSelection);

playRound (humanSelection, computerSelection) {
    let resultText = "";

    if (computerChoice === humanChoice) {
        resultText = "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        resultText = `You win! ${humanChoice} beats ${computerChoice}!`;
    } else {
        computerScore++;
        resultText = `You lose! ${computerChoice} beats ${humanChoice}!`
    }
        log.innerText = resultText;
        document.getElementById("score").innerText = `You: ${humanScore} | Computer: ${computerScore}`;
    }


    playButton.addEventListener("click", () => {
  const humanChoice = getHumanChoice();
  
  if (!humanChoice) return; // stop if input invalid
  
  const computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
});
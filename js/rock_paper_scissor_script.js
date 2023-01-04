// Add scoreboard div
const scoreDiv = document.createElement("div");
document.body.insertBefore(scoreDiv, document.body.firstChild);

// Add button event listeners
const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener('click', buttonClicked));

let playerScore = 0;
let computerScore = 0;

// Start game and assign player input
function buttonClicked(e){

    // Get computer choice
    let computerSelection = getComputerChoice();
    
    // Get players choice
    let playerSelection = e.target.id;
    
    // Start round
    playRound(playerSelection, computerSelection);
}

function getComputerChoice(){
    let choices = ["Rock", "Paper", "Scissors"];
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function playRound(playerSelection, computerSelection){

    // Lowercase selections to make them universally readable
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    // Output function variables
    let win = (playerChoice, computerChoice) => {
        playerScore++;
        scoreDiv.innerText = `You WIN!\n ${playerChoice} beats ${computerChoice}\n` + getCurrentScores();
    }
    let lose = (playerChoice, computerChoice) => {
        computerScore++;
        scoreDiv.innerText = `You lose!\n ${computerChoice} beats ${playerChoice}\n` + getCurrentScores();
    }
    let draw = (playerChoice) => {
        scoreDiv.innerText = `No one wins!\n You both chose: ${playerChoice}\n` + getCurrentScores();
    }


    // Compare choices and output message
    switch(playerSelection){
        case "rock":
                // Win
                if(computerSelection === "scissors"){
                    win(playerSelection, computerSelection);
                }
                // Lose
                else if(computerSelection === "paper"){
                    lose(playerSelection, computerSelection);
                }
                // Draw
                else{
                    draw(playerSelection);
                }
            break;
        
        case "paper":
                // Win
                if(computerSelection === "rock"){
                    win(playerSelection, computerSelection);
                }
                // Lose
                else if(computerSelection === "scissors"){
                    lose(playerSelection, computerSelection);
                }
                // Draw
                else{
                    draw(playerSelection);
                }
            break;

        case "scissors":
                // Win
                if(computerSelection === "paper"){
                    win(playerSelection, computerSelection);
                }
                // Lose
                else if(computerSelection === "rock"){
                    lose(playerSelection, computerSelection);
                }
                // Draw
                else{
                    draw(playerSelection);
                }
            break;

        default:
            alert("You must enter a valid option");
    }

    // Announce winner
    if(playerScore >= 5)
        scoreDiv.innerText = "YOU WON THE MATCH! HOORAY";
    else if(computerScore >= 5){
        scoreDiv.innerText = "THE COMPUTER WON THE MATCH! Better luck next time."
    }
}

function getCurrentScores(){
    return `Player: ${playerScore}\nComputer: ${computerScore}`
}



game();


// Start game
function game(){
    
    // Loop through 5 rounds (best of 5)
    for(i = 0; i < 5; i++){

        // Get computer choice
        let computerSelection = getComputerChoice();

        // Get players choice
        let playerSelection = prompt("Pick between 'Rock, Paper, or Scissors'.", "");

        // Start round
        playRound(playerSelection, computerSelection);
    }

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
    let win = (playerChoice, computerChoice) => console.log(`You WIN! ${playerChoice} beats ${computerChoice}`);
    let lose = (playerChoice, computerChoice) => console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
    let draw = (playerChoice) => console.log(`No one wins! You both chose: ${playerChoice}`);


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
}


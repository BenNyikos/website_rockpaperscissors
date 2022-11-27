game();

function game(){
  let userInputValid;
  let userInput;
    for (let i = 0; i < 5;) {
      userInput = prompt(`#${i+1} Game - Type in your choice(rock, paper, or scissors): `)
      userInput = userInput.toLowerCase()
      if (userInput == "rock" || userInput == "paper" || userInput == "scissors"){
        userInputValid = true
        console.log(playRound(userInput))
        i++
      }
      else {
        userInputValid = false
        console.log("Invalid input")
      }
    }
}

  

function playRound(playerSelection) {
  playerSelection = playerSelection.toLowerCase();
  playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
  computerSelection = computerPlay();

  if (playerSelection == computerSelection){
    console.log(`${playerSelection} against ${computerSelection}! It's a draw!`)
  }
  else if (computerSelection == "Rock" && playerSelection == "Paper" || computerSelection == "Paper" && playerSelection == "Scissors" || computerSelection == "Scissors" && playerSelection == "Rock") {
    console.log(`${playerSelection} beats ${computerSelection}! You won!`)
  }
  else {
    console.log(`${playerSelection} loses against ${computerSelection}! You lost!`)
  }
}

function computerPlay(){
  let computerHand = "";
  let random = Math.floor(Math.random()*3);
  if (random == 0) {
    computerHand = "Rock"
  }
  else if(random == 1){
    computerHand = "Paper"
  }
  else if(random == 2){
    computerHand = "Scissors"
  }
  return computerHand;
}
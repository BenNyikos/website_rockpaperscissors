console.log("You will be playing 5 rounds of Rock, Paper, Scissors")
game();

function game(){
  let userInput;
    for (let i = 0; i < 5; i++) {
      userInput = prompt(`#${i+1} Game - Type in your choice(rock, paper, or scissors): `).toLowerCase();
      userInput = userInput.trim();
        if (userInput == "rock" || userInput == "paper" || userInput == "scissors"){
          console.log(playRound(userInput))
        }
        else {
          console.log("Invalid input")
          i--
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
  const random = Math.floor(Math.random()*3);
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
console.log("You will be playing 5 rounds of Rock, Paper, Scissors")
game();

function game(){
  let userInput;
    for (let i = 0; i < 5;) {
      userInput = prompt(`#${i+1} Game - Type in your choice(rock, paper, or scissors): `)
      userInput = userInput.trim();
      if(userInput){
        if (userInput == "rock" || userInput == "paper" || userInput == "scissors"){
          console.log(playRound(userInput))
          i++
        }
        else {
          console.log("Invalid input")
        }
      }
      else {
        console.log("You are leaving the game!")
        return;
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
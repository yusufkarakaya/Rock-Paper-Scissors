let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

let playerSelection = document.querySelectorAll(".items");
let playerScoreId = document.getElementById('playerScore');
let computerScoreId = document.getElementById('computerScore');
let drawScoreId = document.getElementById('drawScore');
let result = document.getElementById('result');

function computerPlay() {
  const gameItems = ["Rock", "Paper", "Scissors"];

  let randomItem = gameItems[Math.floor(Math.random() * gameItems.length)];
  return randomItem;
}

function playRound(playerSelection, computerSelection) {
  if (computerSelection == "paper" && playerSelection == "rock") {
    computerScore += 1;
    return computerScore;
  } else if (computerSelection == "rock" && playerSelection == "paper") {
    playerScore += 1;
    return playerScore;
  } else if (computerSelection == "scissors" && playerSelection == "rock") {
    playerScore += 1;
    return playerScore;
  } else if (computerSelection == "rock" && playerSelection == "scissors") {
    computerScore += 1;
    return computerScore;
  } else if (computerSelection == "scissors" && playerSelection == "paper") {
    computerScore += 1;
    return computerScore;
  } else if (computerSelection == "paper" && playerSelection == "scissors") {
    playerScore += 1;
    return playerScore;
  } else return drawScoreId.innerHTML = 'Draw!'
}

function game() {
  playerSelection.forEach(function (item) {
    item.addEventListener('click', function () {
      computerPlay();
      const computerSelection = computerPlay();

      drawScoreId.innerHTML = '';
      playRound(item.value, computerSelection.toLowerCase());

      playerScoreId.innerHTML = playerScore;
      computerScoreId.innerHTML = computerScore;
      result.innerHTML = '';

      if (computerScore >= 5) {
        result.innerHTML = "Computer Won!"
        restart();
      } else if (playerScore >= 5) {
        result.innerHTML = "Player Won!"
        restart();
      }
    });
  });
}

function restart() {
  playerScore = 0;
  computerScore = 0;
  drawScoreId.innerHTML = ''
}

game();


